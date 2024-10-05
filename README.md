# Welcome

This is my project for the 2024 NASA Space Apps Challenge.

## Getting started

This project was initially built using `create-next-app` and the example Next.js and FastAPI template at [https://github.com/digitros/nextjs-fastapi](https://github.com/digitros/nextjs-fastapi) as a starting point:

```sh
npx create-next-app my_app --example "https://github.com/digitros/nextjs-fastapi"

```

Please see [GETTING_STARTED](./GETTING_STARTED.md) or view the GitHub repo at [https://github.com/digitros/nextjs-fastapi](https://github.com/digitros/nextjs-fastapi) for more details.

### Local development

Once you have completed the initial project setup (below), you should be able to start your local development server by activating your virtual environment and starting the development server:

```sh
# Activate our virtual environment
% source venv/bin/activate
(venv) %

# Start the development server
% npm run dev
```

If your environment is configured correctly, you should be able to access the following URLs:

- [http://localhost:3000/](http://localhost:3000/) - Next.js frontend application
- [http://localhost:3000/api/helloNextJs](http://localhost:3000/api/helloNextJs) - [EXAMPLE] Next.js backend API/route handler
- [http://127.0.0.1:8000/api/py/helloFastApi](http://127.0.0.1:8000/api/py/helloFastApi) - [EXAMPLE] Python FastAPI endpoint

Once you are ready to spin down your local environment:

```sh
# CTRL+C to shut down the development server

# Deactivate the Python virtual environment
(venv) % deactivate
%
```

#### Initial project setup

This project was initially developed on a 2021 14" MacBook Pro with:

- Apple M1 Max
- 64 GB RAM
- macOS Sequoia 15.0.1

To get up and running, we need to do three things:

- Create and activate a Python virtual environment
- Install dependencies for our Next.js project
- Run the development server

Please make sure that you have Python and Next.js installed on your machine:

```sh
# Verify Python 3 is installed on your machine
% python3 --version
Python 3.11.1

# Verify Node.js is installed on your machine
% node -v
v20.11.1
```

##### Create and activate a Python virtual environment

```sh
# Create a virtual environment for our Python project
% python3 -m venv venv

# Activate our virtual environment
% source venv/bin/activate
(venv) %
```

##### Install dependencies for our Next.js project

```sh
# Install project dependencies for our Next.js app
% npm install
```

Python dependencies will be installed automatically when the development server is started.

##### Run the development server

```sh
# Start the development server
% npm run dev
```

If your environment is configured correctly, you should be able to access the following URLs:

- [http://localhost:3000/](http://localhost:3000/) - Next.js frontend application
- [http://localhost:3000/api/helloNextJs](http://localhost:3000/api/helloNextJs) - [EXAMPLE] Next.js backend API/route handler
- [http://127.0.0.1:8000/api/py/helloFastApi](http://127.0.0.1:8000/api/py/helloFastApi) - [EXAMPLE] Python FastAPI endpoint
