import express from "express";
import config from "./config";
import FetchFlights from "./FetchFlights";

const app = express();

app.get("/", function(req, res) {
  setTimeout(async () => {
    const flights = await FetchFlights().catch(() => []);
    if (!flights) {
      // we call also return error message if the response is unavailable,
      // but empty responses are preferred since it does not cause the clients
      // that are consuming the API to crush
      // therefore we will return empty array as response
      return res.json([]);
    }
    return res.json(flights);
  }, 900);
});

app.listen(config.APP_PORT, () => {
  console.log(`App listening to ${config.APP_PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

export default app;
