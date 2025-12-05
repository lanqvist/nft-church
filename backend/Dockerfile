# Этап сборки приложения с Maven
FROM maven:3.8.1-openjdk-17 AS build
WORKDIR /app

# Копируем только POM-файл для кэширования зависимостей
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходный код и собираем приложение
COPY src ./src
RUN mvn package -DskipTests

# Этап запуска приложения
FROM openjdk:17-jdk
WORKDIR /app

# Копируем собранный JAR-файл из этапа сборки
COPY --from=build /app/target/*.jar app.jar

# Открываем порт (Spring Boot по умолчанию использует 8080)
EXPOSE 8080

# Запускаем приложение
ENTRYPOINT ["java", "-jar", "app.jar"]