FROM rasa/rasa:3.1.0
WORKDIR '/app'
COPY . /app
USER root
EXPOSE 8080
CMD ["run","--cors","*", "--port", "8080"]