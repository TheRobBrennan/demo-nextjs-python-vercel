# Default version of Node.js and Python unless specified in the build command or docker-compose.yml
ARG NODE_VERSION=20.18.0
ARG PYTHON_VERSION=3.12.7

FROM node:${NODE_VERSION}

# Re-declare the ARG to make it available in the build stage
ARG PYTHON_VERSION

# Install dependencies for building Python
RUN apt-get update && \
    apt-get install -y build-essential wget libssl-dev zlib1g-dev libncurses5-dev libbz2-dev libreadline-dev libsqlite3-dev libffi-dev liblzma-dev tk-dev libgdbm-dev libnss3-dev

# Install Python from source
RUN wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz && \
    tar -xf Python-${PYTHON_VERSION}.tgz && \
    cd Python-${PYTHON_VERSION} && \
    ./configure --enable-optimizations && \
    make -j$(nproc) && \
    make altinstall && \
    cd .. && \
    rm -rf Python-${PYTHON_VERSION}.tgz Python-${PYTHON_VERSION}

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Create and activate virtual environment
# Extract major.minor version from the full version
RUN PYTHON_MAJOR_MINOR=$(echo ${PYTHON_VERSION} | cut -d. -f1,2) && \
    python${PYTHON_MAJOR_MINOR} -m venv /opt/venv

# Activate the virtual environment
ENV PATH="/opt/venv/bin:$PATH"

# Upgrade pip in the virtual environment
RUN pip install --upgrade pip

# Install Python dependencies in the virtual environment
RUN pip install --no-cache-dir -r requirements.txt

# Expose ports
EXPOSE 3000 8000

# Start the application
CMD ["npm", "run", "dev"]
