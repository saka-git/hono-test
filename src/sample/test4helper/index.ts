import { Hono } from "hono";

const app = new Hono().get("/foo/bar", (c) => {
  return c.json({ message: "Hi" });
});

export default app;
