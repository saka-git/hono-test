import { Hono } from "hono";

const app = new Hono().post("/", async (c) => {
  const data = await c.req.parseBody<{ message: string }>();
  return c.text(`Message is ${data.message}`);
});

export default app;
