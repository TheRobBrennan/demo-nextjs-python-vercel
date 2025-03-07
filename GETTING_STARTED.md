# Next.js FastAPI Starter

![Vercel Logo](https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png)

Simple Next.js 15 boilerplate that uses [FastAPI](https://fastapi.tiangolo.com/) as the API backend.

## Introduction

This is a hybrid Next.js 15 + Python template. One great use case of this is to write Next.js apps that use Python AI libraries on the backend, while still having the benefits of Next.js Route Handlers and Server Side Rendering.

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](next.config.js) to map any request to `/api/py/:path*` to the FastAPI API, which is hosted in the `/api` folder.

Also, the app/api routes are available on the same domain, so you can use Next.js Route Handlers and make requests to `/api/...`.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

[https://demo-nextjs-python-vercel.vercel.app/](https://demo-nextjs-python-vercel.vercel.app/)

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTheRobBrennan%2Fdemo-nextjs-python-vercel)

## Developing Locally

You can clone & create this repo with the following command:

```bash
npx create-next-app nextjs-fastapi --example "https://github.com/TheRobBrennan/demo-nextjs-python-vercel"
```

## Getting Started

First, create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Then, install the dependencies:

```bash
npm install
```

Then, run the development server (Python dependencies will be installed automatically):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastAPI server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Learn More

To learn more about Next.js and FastAPI, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
