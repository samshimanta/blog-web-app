FROM postgres:16

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=blog_user
ENV POSTGRES_PASSWORD=blog_password
ENV POSTGRES_DB=blog_db

# Copy the database dump file into the container
COPY ./blog_db_dump.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5400