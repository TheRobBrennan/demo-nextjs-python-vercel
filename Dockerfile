ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}

# Install Python and venv
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Create and activate virtual environment
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Install Python dependencies in the virtual environment
RUN pip3 install --no-cache-dir -r requirements.txt

# Expose ports
EXPOSE 3000 8000

# Start the application
CMD ["npm", "run", "dev"]