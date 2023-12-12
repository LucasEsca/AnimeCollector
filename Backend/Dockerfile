FROM openjdk:17-alpine
MAINTAINER FLI
VOLUME /tmp
COPY target/fli-0.0.1-SNAPSHOT.jar  fli-app.jar
ENTRYPOINT ["java","-jar","/fli-app.jar"]
