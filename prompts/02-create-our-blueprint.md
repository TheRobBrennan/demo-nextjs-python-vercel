# Create our blueprint

We have foundational pieces in place that we can use to create our blueprint:

- A Python backend powered by FastAPI is contained in the `./api` directory
- A Next.js frontend is contained in the `./app` directory
  - Our default page currently displays an APIDebug component, but should eventually display a map centered on the user's location
- Next.js API routes are contained in the `./app/api` directory

Let's revisit our requirements as defined in "Landsat Reflectance Data: On the Fly and at Your Fingertips" and develop a plan for what we are going to build over the next 24 hours.

One thought I had was to consider developing a web app that would:

- Allow the user to login with either a username and password - or social login such as Google
- After logging in, they would see a welcome screen that
-- Defaults to a map centered on their location OR enables them to specify a specific address or GPS coordinates to use as their home location
-- Users should be able to mark locations as favorites for future recall

Once that phase is done, let's think about quick wins that I could implement within the next 24 hours, including:

- Displaying the latest Landsat imagery and data for their chosen location - with an option to review data for their chosen location over a specific period of time

User location detection can be implemented using the browser's Geolocation API. User location data should be stored in local storage so that the user's home location is automatically loaded when they return to the app.

User authentication can be implemented using NextAuth.

The app should be styled using Tailwind CSS.
