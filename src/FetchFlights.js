import axios from "axios";
import config from "./config";
import removeDuplicates from "./helpers/removeDuplicates";

export default async function fetchFlights() {
  const [dataAPISourceA, dataAPISourceB] = await Promise.all([
    axios.get(config.FLIGHTS_API_SOURCE_A),
    axios.get(config.FLIGHTS_API_SOURCE_B, {
      auth: {
        username: config.FLIGHTS_API_SOURCE_B_USER,
        password: config.FLIGHTS_API_SOURCE_B_PASSWORD
      }
    })
  ])
    // we can catch the error here and send it to a logging service
    // since we do not care about the error here, we just return empty array
    // because we want the array/object functions to not fail
    .catch(() => []);

  const flightsSourceA =
    dataAPISourceA && dataAPISourceA.data
      ? dataAPISourceA.data.flights.map(flight => flight.slices).flat(Infinity)
      : [];

  const flightsSourceB =
    dataAPISourceB && dataAPISourceB.data
      ? dataAPISourceB.data.flights.map(flight => flight.slices).flat(Infinity)
      : [];

  return removeDuplicates(
    [...flightsSourceA, ...flightsSourceB],
    ["flight_number", "arrival_date_time_utc", "departure_date_time_utc"]
  );
}
