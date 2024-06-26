import Elysia from "elysia";
import { chatController } from "./chat.controller";
import { dataSourcesController } from "./data-sources.controller";

export const indexController = new Elysia()
  .use(chatController)
  .use(dataSourcesController);
