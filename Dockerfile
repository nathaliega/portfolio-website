FROM python:3.9-slim

WORKDIR /app
COPY static templates requirements.txt website.py under_proxy.py .
RUN pip install -r requirements.txt