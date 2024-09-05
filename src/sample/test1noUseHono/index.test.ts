import app from "./index";
import { expect, describe, it } from "vitest";

describe("Testing My App", () => {
  it("Should return 200 response", async () => {
    // !これはsample/test1/index.tsを指している
    // !http://localhost:8787/sample/test1と入力すると404
    const req = new Request("http://localhost:8787/");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello World");
  });
});
