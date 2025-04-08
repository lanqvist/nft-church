package ru.nft.church_nft.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class EmailService {

    @Value("${mail.from}")
    private String mailFrom;

    @Value("${mail.from.name}")
    private String mailFromName;

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Async
    public void sendSimpleMessage(String to, String subject, String text) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(mailFrom);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            mailSender.send(message);
            log.info("Успешно отправлено простое письмо на адрес: {}", to);
        } catch (MailException e) {
            log.error("Ошибка при отправке простого письма на адрес: {}", to, e);
            // TODO: retry mechanism
        }
    }

    @Async
    public void sendMessageWithAttachment(String to, String subject, String text, String pathToAttachment) {
        try {
            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true);mailSender.send(message);
            log.info("Успешно отправлено письмо с вложением на адрес: {}", to);
        } catch (MessagingException e) {
            log.error("Ошибка при отправке письма с вложением на адрес: {}", to, e);
            // TODO: retry mechanism
        } catch (MailException e) {
            log.error("Ошибка при отправке письма с вложением на адрес: {}", to, e);
        }
    }


    @Async
    public void sendMessageWithHTMLTemplate(String to, String subject, String templateName, Map<String, Object> templateVariables) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,
                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            Context context = new Context();
            context.setVariables(templateVariables);
            String html = templateEngine.process(templateName, context);

            helper.setFrom(mailFrom);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(html, true);

            mailSender.send(message);
            log.info("Успешно отправлено HTML письмо на адрес: {}", to);

        } catch (MessagingException e) {
            log.error("Ошибка при отправке HTML письма на адрес: {}", to, e);
        }  catch (MailException e) {
            log.error("Ошибка при отправке HTML письма на адрес: {}", to, e);
        }
    }

    @Async
    public void sendMassMessage(List<String> tos, String subject, String text) {
        for (String to : tos) {
            sendSimpleMessage(to, subject, text);
        }
    }
}
