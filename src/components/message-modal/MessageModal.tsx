/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import Icon from './assets/mail.svg?react';
import VV from './assets/vv.png';
import styles from './MessageModal.module.css';

export const MessageModal = ({ opened, close }) => {
    const isMobile = useMediaQuery('(max-width: 50em)');

    return (
        <Modal.Root
            opened={opened}
            onClose={close}
            fullScreen={isMobile}
            transitionProps={{ transition: 'fade', duration: 200 }}
            centered
            keepMounted
            size="xl"
        >
            <Modal.Overlay />
            <Modal.Content className={styles.content}>
                <Modal.Header className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Icon className={styles.icon} width="100%" height="100%" />
                    </div>

                    <div className={styles.title}>
                        Обращение митрополита Чебоксарского и Чувашского Варнавы к пастве по поводу строительства в г.
                        Чебоксары храма в честь преподобного Сергия Радонежского
                    </div>
                    <Modal.CloseButton className={styles.closeIcon} />
                </Modal.Header>

                <Modal.Body className={styles.body}>
                    <div className={styles.textBody}>
                        <p>Дорогие братья и сестры!</p>
                        <p>
                            В 2014 году исполнилось 700 лет со дня рождения печальника земли Русской – преподобного
                            Сергия Радонежского и по благословению Патриарха Московского и всея Руси Кирилла к этой дате
                            в городе Чебоксары был заложен собор в его честь.
                        </p>
                        <p>
                            Преподобный Сергий Радонежский почитается не только как основатель Свято-Троицкой Сергиевой
                            Лавры, но и великий заступник и молитвенник за Землю русскую. Именно он примирял ссорившихся
                            русских князей и способствовал укреплению Московского государства. Именно он принимал к себе
                            и простых крестьян и горожан, бояр и князей, помогая духовным советом и наставлением
                            каждому, кто приходил к великому авве Сергию.
                        </p>
                        <p>
                            Господь призвал меня на монашеское служение в 1955 году. Я молился и трудился в
                            Свято-Троицкой Сергиевой Лавре в течении 21 года. И вот произволением Божиим и молитвами
                            преподобного Сергия, Святейший Патриарх и Священный Синод назначили меня на архиерейскую
                            кафедру в Чувашскую Республику, где я уже 40 лет смиренно несу это послушание.
                        </p>
                        <p>
                            В благодарность за помощь и покровительство в трудах по устроению епархиальной жизни и
                            возрождению духовности, по благословению Святейшего Патриарха Кирилла, было принято решение
                            возвести храм в честь преподобного аввы Сергия. 2 августа 2015 года состоялась торжественная
                            закладка капсулы в стену строящегося храма с участием Святейшего Патриарха Московского и
                            всея Руси Кирилла.
                        </p>
                        <p>
                            В конце 2015 года на частные пожертвования жителей Чувашской Республики завершены работы по
                            возведению фундамента и нулевого цикла строительства. Обращаюсь к Вам с огромной просьбой, с
                            болью и надеждой в сердце поддержать это великое дело! Сергий Радонежский – моя путеводная
                            звезда в этом мире, и я молюсь, чтобы благодать его молитвы явилась заступником всех жителей
                            Чувашской Республики. Соборный храм станет для верующих людей местом молитвы и утешения.
                        </p>
                        <p>
                            Приношу Вам горячие пожелания крепости душевных и телесных сил и помощи Божией на Вашем
                            жизненном пути. Пусть Благодать Спасителя нашего Иисуса Христа сопутствует Вам всегда.
                        </p>
                        <div className={styles.textFooter}>
                            <img src={VV} alt="Владыка Варнава" />
                            <p>
                                Варнава, митрополит Чебоксарский и Чувашский,{'\n'}глава чувашской митрополии{' '}
                                <span>(2012 – 2020)</span>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <div className={styles.footer}>
                    <Button className={styles.button} variant="default" color="green" onClick={close}>
                        Закрыть
                    </Button>
                </div>
            </Modal.Content>
        </Modal.Root>
    );
};

export const FloatingButton: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <div className={styles.floatingButton} onClick={open}>
                <Icon />
                <span>Послание от Владыки</span>
            </div>
            <MessageModal opened={opened} close={close} />
        </>
    );
};
