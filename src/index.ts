import { Hono } from "hono";

const overViewApp = new Hono().get("/", (c) => {
  return c.json(
    {
      totalRevenue: {
        value: "$45,231.8",
        sub: "+20.1% from last month",
      },
      subscriptions: {
        value: "+2350",
        sub: "+180.1% from last month",
      },
      sales: {
        value: "+12,234",
        sub: "+19% from last month",
      },
      activeNow: {
        value: "+573",
        sub: "+201 since last hour",
      },
    },
    200
  );
});

const chartDataApp = new Hono().get("/", (c) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5000) + 1000;
  };
  return c.json(
    {
      data: [
        { name: "Jan", total: getRandomNumber() },
        { name: "Feb", total: getRandomNumber() },
        { name: "Mar", total: getRandomNumber() },
        { name: "Apr", total: getRandomNumber() },
        { name: "May", total: getRandomNumber() },
        { name: "Jun", total: getRandomNumber() },
        { name: "Jul", total: getRandomNumber() },
        { name: "Aug", total: getRandomNumber() },
        { name: "Sep", total: getRandomNumber() },
        { name: "Oct", total: getRandomNumber() },
        { name: "Nov", total: getRandomNumber() },
        { name: "Dec", total: getRandomNumber() },
      ],
    },
    200
  );
});

const app = new Hono()
  .route("/overview", overViewApp)
  .route("/chartdata", chartDataApp);

export type AppType = typeof app;
export default app;

// import { Hono } from "hono";
// import { handle } from "hono/vercel";
// import { zValidator } from "@hono/zod-validator";
// import { z } from "zod";

// // basePath は API ルートのベースパスを指定します
// // 以降、新たに生やす API ルートはこのパスを基準に追加されます
// const app = new Hono().basePath("/api");
// const route = app.post(
//   "/rpc",
//   zValidator(
//     "form",
//     z.object({
//       title: z.string(),
//       body: z.string(),
//     })
//   ),
//   (c) => {
//     // ...
//     return c.json(
//       {
//         ok: true,
//         message: "Success!",
//         title: "title",
//         body: "body",
//       },
//       201
//     );
//   }
// );

// export type AppType = typeof route;

// export const POST = handle(app);
