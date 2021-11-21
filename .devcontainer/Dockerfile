FROM node:14

RUN apt-get update \
  && apt-get install -y \
    build-essential \
    jq \
    libcairo2-dev \
    libgif-dev \
    libjpeg-dev \
    libpango1.0-dev \
    librsvg2-dev \
    zsh \
  && rm -rf /var/lib/apt/lists/*
