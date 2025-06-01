FROM postgres:16

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=blog_user
ENV POSTGRES_PASSWORD=blog_password
ENV POSTGRES_DB=blog_db

# Expose the PostgreSQL port
EXPOSE 5432