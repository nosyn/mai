import Elysia from "elysia";
import { chatController } from "./chat.controller";

export const indexController = new Elysia().use(chatController);
