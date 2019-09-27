import request from "supertest";
import index from "../index";

describe("Get / ", () => {
  test("It should return status code 200", async () => {
    const response = await request(index).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).not.toBe(null);
  });
  test("It should be defined and not return null", async () => {
    const response = await request(index).get("/");
    expect(response.body).toBeDefined();
    expect(response.body).not.toBe(null);
  });
});
