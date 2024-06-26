import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { initSettings } from "./libs/ai/engine/settings";
import { indexController } from "./controllers";

const main = () => {
  initSettings();

  const app = new Elysia()
    .use(cors())
    .use(indexController)
    .get("/", () => {
      return "HI Elysia. Server is up and happy";
    })

    .listen(8000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
};

main();
