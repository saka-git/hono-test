import { expect, describe, it } from "vitest";
import { testClient } from "hono/testing";
import app from "./index";

describe("Testing My App", () => {
  it("Should return 200 response", async () => {
    const res = await testClient(app).foo.bar.$get();
    const data = await res.json();
    expect(data.message).toBe("Hi");
  });
});
