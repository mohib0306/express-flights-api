import request from "supertest";
import FetchFlights from "../FetchFlights";

describe("fetchFlights() should not return null ", () => {
  test("It should should fetch flights and be defined", async () => {
    await expect(Promise.resolve(FetchFlights())).resolves.toBeDefined();
  });
  test("It should not return null", async () => {
    await expect(Promise.resolve(FetchFlights())).resolves.not.toBe(null);
  });
});
