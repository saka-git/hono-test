import app from "./index";
import { expect, describe, it } from "vitest";

describe("Testing My App", () => {
  it("Should return 200 response", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello World");
  });
});
