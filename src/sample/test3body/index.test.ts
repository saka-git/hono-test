import app from "./index";
import { expect, describe, it } from "vitest";

describe("Testing My App", () => {
  it("Should return 200 response", async () => {
    const formData = new FormData();
    formData.append("message", "Hi");
    const res = await app.request("/", {
      method: "POST",
      body: formData,
    });
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Message is Hi");
  });
});
