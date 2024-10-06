# NASA Challenge 2024: Landsat Demo with Next.js, Python, and Vercel

This project demonstrates a full-stack application using [Next.js](https://nextjs.org/), [FastAPI](https://fastapi.tiangolo.com/), and optionally [Docker](https://www.docker.com/) for containerization.

You can view the [demo](https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/) application which is hosted on Vercel at [https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app](https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/).

You should be able to access the following URLs:

- [https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/](https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/) - Next.js frontend application
- [https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/api/ping](https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/api/ping) - Next.js backend API/route handler
- [https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/api/py/ping](https://nasa-challenge-2024-landsat-demo-with-nextjs-python-and-vercel.vercel.app/api/py/ping) - Python FastAPI endpoint

## Getting Started

This project was initially developed on a 2021 14" MacBook Pro with:

- Apple M1 Max
- 64 GB RAM
- macOS Sequoia 15.0.1

The original project was built using `create-next-app` and the example Next.js and FastAPI template at [https://github.com/digitros/nextjs-fastapi](https://github.com/digitros/nextjs-fastapi) as a starting point:

```sh
npx create-next-app my_app --example "https://github.com/digitros/nextjs-fastapi"

```

Please see [GETTING_STARTED](./GETTING_STARTED.md) or view the GitHub repo at [https://github.com/digitros/nextjs-fastapi](https://github.com/digitros/nextjs-fastapi) for more details.

### Prerequisites

If you are developing locally, please make sure that you have Python and Next.js installed on your machine:

```sh
# Verify Python 3 is installed on your machine
% python3 --version
Python 3.12.7

# Upgrade pip to the latest version
% python3 -m pip install --upgrade pip

# Verify Node.js is installed on your machine
% node -v
v20.18.0
```

If you are using Docker, please make sure that you have Docker installed on your machine:

```sh
% docker --version
Docker version 27.2.0, build 3ab4256
```

### Running the Application

You can run this application either directly on your machine or using Docker.

To run the application using Docker, you can use the following commands:

```sh
% npm run docker:dev
```

To run the application directly on your machine, you can use the following commands:

```sh
# Activate our virtual environment
% source venv/bin/activate

# Install project dependencies for our Next.js app
# NOTE: Python dependencies will be installed automatically when the development server is started.
% npm install

# Start the development server
% npm run dev
```

If your environment is configured correctly, you should be able to access the following URLs:

- [http://localhost:3000/](http://localhost:3000/) - Next.js frontend application
- [http://localhost:3000/api/ping](http://localhost:3000/api/ping) - Next.js backend API/route handler
- [http://localhost:8000/api/py/ping](http://localhost:8000/api/py/ping) - Python FastAPI endpoint

#### Using Docker

1. Build the Docker images:

   ```sh
   npm run docker:build
   ```

2. Start the Docker containers:

   ```sh
   npm run docker:up
   ```

3. View the logs:

   ```sh
   npm run docker:logs
   ```

4. To stop the containers:

   ```sh
   npm run docker:down
   ```

5. To remove all containers, volumes, and images:

   ```sh
   npm run docker:destroy
   ```

The application will be available at:

- [http://localhost:3000/](http://localhost:3000/) - Next.js frontend application
- [http://localhost:3000/api/ping](http://localhost:3000/api/ping) - Next.js backend API/route handler
- [http://localhost:8000/api/py/ping](http://localhost:8000/api/py/ping) - Python FastAPI endpoint

#### Running Locally (without Docker)

If you prefer to run the application directly on your machine:

1. Create and activate a Python virtual environment:

   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:

   ```sh
   npm install
   pip install -r requirements.txt
   ```

3. Run the development server:

   ```sh
   npm run dev   
   ```

   The application will be available at:

    - [http://localhost:3000/](http://localhost:3000/) - Next.js frontend application
    - [http://localhost:3000/api/ping](http://localhost:3000/api/ping) - Next.js backend API/route handler
    - [http://localhost:8000/api/py/ping](http://localhost:8000/api/py/ping) - Python FastAPI endpoint

4. To stop the development server, use CTRL+C.

5. Deactivate the Python virtual environment:

   ```sh
   deactivate
   ```

### Running Tests

To run the Python tests, use the following command:

```sh
# Run Python tests
% npm run test:python
```

To run the Python tests with coverage, use the following command:

```sh
# Run Python tests with coverage
% npm run test:python:coverage
```

To open the coverage report in your browser, use the following command:

```sh
# Open the coverage report
% npm run test:python:coverage:open
```

## Deployment to Vercel

This project can be deployed to the free tier of Vercel without any customization. Simply follow the steps in the [Deploying Git Repositories with Vercel](https://vercel.com/docs/deployments/git#deploying-git-repositories-with-vercel) guide to create a new project on Vercel using your repository. 🤓

## Project Structure

- `app/`: Next.js application files
- `api/`: FastAPI application files
- `Dockerfile`: Docker configuration for the application
- `docker-compose.yml`: Docker Compose configuration
- `package.json`: Node.js dependencies and scripts
- `requirements.txt`: Python dependencies

## Scripts

Start your development server:

- `npm run dev`: Run the application in development mode
- `npm run docker:dev`: Run the application using Docker in development mode

Additional scripts include:

- `npm run docker:build`: Build Docker images
- `npm run docker:up`: Start Docker containers
- `npm run docker:down`: Stop Docker containers
- `npm run docker:destroy`: Remove all Docker containers, volumes, and images
- `npm run docker:logs`: View Docker container logs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
