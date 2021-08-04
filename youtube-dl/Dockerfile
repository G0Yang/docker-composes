FROM python:alpine

RUN pip install --upgrade pip
RUN pip install youtube_dl

COPY src/youtube-dl.conf /etc/youtube-dl.conf

WORKDIR /media

ENTRYPOINT ["youtube-dl"]
