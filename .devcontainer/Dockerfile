FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN echo "Acquire::http::Pipeline-Depth 0;" > /etc/apt/apt.conf.d/99custom && \
  echo "Acquire::http::No-Cache true;" >> /etc/apt/apt.conf.d/99custom && \
  echo "Acquire::BrokenProxy true;" >> /etc/apt/apt.conf.d/99custom
