FROM python:3.7.4

ENV APP_HOME=/app
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME

LABEL description="Development image for real estate project"

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# build_essential This includes compilers, make, and other build-related utilities 
# -y flag is used to automatically confirm the installation without prompting for user input
# apt-get install -y libpq-dev: This command installs the "libpq-dev" package. This package contains development files and header files for the PostgreSQL database system.

RUN apt-get update \
  && apt-get install -y build-essential \
  && apt-get install -y libpq-dev \
  && apt-get install -y gettext \
  && apt-get -y install netcat gcc postgresql \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip

COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r /app/requirements.txt

#  It copies the script from your local filesystem into the image, removes any carriage return characters at the end of lines
COPY ./docker/local/django/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./docker/local/django/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start




ENTRYPOINT [ "/entrypoint"]