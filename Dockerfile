FROM debian:latest

COPY init.sh /root/init.sh
WORKDIR /root

CMD ["bash", "-c", "bash /root/init.sh && exec zsh"]
