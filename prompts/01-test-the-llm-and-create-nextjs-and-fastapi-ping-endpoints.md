# Test the LLM and create Next.js and FastAPI ping endpoints

Demonstrate that you understand the instructions and project layout by performing the following modifications:

- Create a new `ping` endpoint as a Next.js route handler at `/api/ping` which will return a JSON object containing a fun message and a timestamp of the response
- Create a new `ping` endpoint in FastAPI at `/api/ping` which will return a JSON object containing a fun message and a timestamp of the response
- Create React components to be displayed on the default page that include
  - A `Header` component containing the title of this particular challenge incorporated with a visually-appealing background image of some Landsat imagery
  - An `APIDebug` component that will display the results of our new endpoints and optionally allow the user to refresh individual requests (e.g. the Next.js route handler or the FastAPI endpoint) or refresh both at once
