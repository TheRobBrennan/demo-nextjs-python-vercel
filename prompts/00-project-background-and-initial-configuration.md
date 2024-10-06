# Project background and initial configuration

We are participating in the 2024 NASA Space Apps Challenge "Landsat Reflectance Data: On the Fly and at Your Fingertips" - with specific challenge details, requirements, and resources identified at [https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/landsat-reflectance-data-on-the-fly-and-at-your-fingertips/](https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/landsat-reflectance-data-on-the-fly-and-at-your-fingertips/) - although a copy of this exact information exists [here](../documentation/challenge_landsat_reflectance_data.md) for reference.

This project consists of a Next.js web application that can use Next.js route handlers (API routes) on the backend as well as Python code via a FastAPI backend.

The project [README](../README.md) contains important information about the project structure, initial setup and configuration, and notes about the deployed web application on Vercel.

There are a couple of important things to consider in terms of the web application:

- We are using Next.js v14 for a TypeScript React web application - which has its source code and assets contained within the `./app` directory
- Backend Next.js route handlers are defined as subdirectories of `./app/api` for all TypeScript and JavaScript code (`route.ts` or `route.js`, respectively)
  - To invoke our example `helloNextJs` endpoint, the front-end code would need to call the `/api/helloNextJs` endpoint
- A Python backend powered by FastAPI is contained in the `./api` directory
  - To invoke our example `helloFastApi` endpoint, the front-end code would need to call the `/api/py/helloFastApi` endpoint
