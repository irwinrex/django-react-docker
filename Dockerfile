###############
# DOCKER IMAGES #
###############
FROM python:3.10

# Set the working directory
WORKDIR /app

# Remove current pip version from python image
RUN rm -rvf /usr/local/lib/python3.10/site-packages/pip-23.0.1.dist-info

# Upgrade pip to a specific version
RUN pip install --upgrade pip==23.3

# Copy the requirements file into the container
COPY django/requirements.txt .

# Install the requirements
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY django /app

# create the app user
RUN addgroup --system python && adduser --system --group python
RUN chown -R python:python /app

#RUN python manage.py makemigrations && python manage.py migrate

# change to the python user
USER python

# Expose port 7000 for the Django app
EXPOSE 7000

# Start the application
CMD ["uwsgi", "--ini", "/app/uwsgi.ini"]
# CMD ["python", "manage.py", "runserver", "0.0.0.0:7000"]