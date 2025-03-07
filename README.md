# Welcome 👋

This project demonstrates a full-stack application using [Next.js](https://nextjs.org/), [FastAPI](https://fastapi.tiangolo.com/), and optionally [Docker](https://www.docker.com/) for containerization.

You can view the [demo](https://demo-nextjs-python-vercel.vercel.app/) application which is hosted on Vercel at [https://demo-nextjs-python-vercel.vercel.app](https://demo-nextjs-python-vercel.vercel.app/).

## Available endpoints

- [https://demo-nextjs-python-vercel.vercel.app/](https://demo-nextjs-python-vercel.vercel.app/) - Next.js frontend application
- [https://demo-nextjs-python-vercel.vercel.app/api/ping](https://demo-nextjs-python-vercel.vercel.app/api/ping) - Next.js backend API/route handler
- [https://demo-nextjs-python-vercel.vercel.app/api/py/ping](https://demo-nextjs-python-vercel.vercel.app/api/py/ping) - Python FastAPI endpoint

## Getting Started

This project was initially developed on a Mac with:

- macOS Sequoia 15.3.1
- Python 3.13.1
- Node.js v22.12.0
- Docker version 27.5.1

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
Python 3.13.1

# Upgrade pip to the latest version
% python3 -m pip install --upgrade pip

# Verify Node.js is installed on your machine
% node -v
v22.12.0
```

If you are using Docker, please make sure that you have Docker installed on your machine:

```sh
% docker --version
Docker version 27.5.1, build 9f9e405
```

If you plan to test GitHub Actions workflows locally, you'll need to install [act](https://github.com/nektos/act):

```sh
# macOS (using Homebrew)
% brew install act

# Verify act installation
% act --version
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
% python3 -m venv venv
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

#### Next.js

To run the Next.js tests, use the following command:

```sh
# Run Next.js tests
% npm run test:next
```

To run the Next.js tests with coverage, use the following command:

```sh
# Run Next.js tests with coverage
% npm run test:next:coverage
```

To open the coverage report in your browser, use the following command:

```sh
# Open the coverage report
% npm run test:next:coverage:open
```

#### Python

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

### GitHub Actions Workflow Testing

This project includes scripts to test GitHub Actions workflows locally using [act](https://github.com/nektos/act). These tests can be run in a Docker environment to ensure workflow compatibility.

#### Testing All Workflows

To run all workflow tests:

```sh
# Run all workflow tests
% npm run test:workflows
```

#### Testing Semantic PR Workflows

Test different types of pull request scenarios:

```sh
# Test PR with minor version changes (default)
% npm run test:workflows:semantic

# Test PR with major version changes
% npm run test:workflows:semantic:major

# Test PR with minor version changes
% npm run test:workflows:semantic:minor

# Test PR with patch version changes
% npm run test:workflows:semantic:patch

# Test PR with invalid format
% npm run test:workflows:semantic:invalid
```

#### Testing Version and Merge Workflows

```sh
# Test version bump workflow
% npm run test:workflows:version

# Test main branch merge workflow
% npm run test:workflows:merge
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

Open application URLs:

- `npm run open:local`: Open all local development URLs in your default browser
  - Next.js frontend (<http://localhost:3000>)
  - Next.js API route (<http://localhost:3000/api/ping>)
  - Python FastAPI endpoint (<http://localhost:8000/api/py/ping>)
- `npm run open:demo`: Open all production URLs in your default browser
  - Next.js frontend (<https://demo-nextjs-python-vercel.vercel.app>)
  - Next.js API route (<https://demo-nextjs-python-vercel.vercel.app/api/ping>)
  - Python FastAPI endpoint (<https://demo-nextjs-python-vercel.vercel.app/api/py/ping>)

Additional scripts include:

- `npm run docker:build`: Build Docker images
- `npm run docker:up`: Start Docker containers
- `npm run docker:down`: Stop Docker containers
- `npm run docker:destroy`: Remove all Docker containers, volumes, and images
- `npm run docker:logs`: View Docker container logs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
