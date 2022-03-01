FROM ubuntu:latest

RUN apt update && apt install -y openssh-server vim

RUN adduser --disabled-password ssh-user

RUN echo 'ssh-user:ssh-user' | chpasswd

EXPOSE 22

CMD ["service", "ssh", "start", "-D"]
