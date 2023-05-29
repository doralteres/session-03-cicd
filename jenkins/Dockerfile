FROM jenkins/jenkins:lts-jdk11
# if we want to install via apt
USER root
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y nodejs yarn
# drop back to the regular jenkins user - good practice
USER jenkins
# GIT CONFIG
RUN git config --global user.name "Dor Alteresku"
RUN git config --global user.email "doralteres@gmail.com"