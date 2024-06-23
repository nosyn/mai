import {
  ChatRequestOptions,
  Message,
  StreamData,
  StreamingTextResponse,
} from "ai";
import { Elysia } from "elysia";
import { ChatMessage, MessageContent, Settings } from "llamaindex";
import { createChatEngine } from "@/controllers/chat/engine/chat";
import { LlamaIndexStream } from "@/controllers/chat/llamaindex-stream";
import { createCallbackManager } from "@/controllers/chat/stream-helper";

const convertMessageContent = (
  textMessage: string,
  imageUrl: string | undefined
): MessageContent => {
  if (!imageUrl) return textMessage;
  return [
    {
      type: "text",
      text: textMessage,
    },
    {
      type: "image_url",
      image_url: {
        url: imageUrl,
      },
    },
  ];
};

export const chatController = new Elysia().post(
  "/api/chat",
  async ({ body, error }) => {
    const {
      messages,
      data,
      ...rest
    }: { messages: Message[]; data: ChatRequestOptions["data"] } = body as any;
    const userMessage = messages.pop();
    if (!messages || !userMessage || userMessage.role !== "user") {
      return error(400, {
        error:
          "messages are required in the request body and the last message must be from the user",
      });
    }
    const chatEngine = await createChatEngine();
    // Convert message content from Vercel/AI format to LlamaIndex/OpenAI format
    const userMessageContent = convertMessageContent(
      userMessage.content,
      data?.imageUrl
    );
    // Init Vercel AI StreamData
    const vercelStreamData = new StreamData();
    // Setup callbacks
    const callbackManager = createCallbackManager(vercelStreamData);
    // Calling LlamaIndex's ChatEngine to get a streamed response

    // Calling LlamaIndex's ChatEngine to get a streamed response
    const response = await Settings.withCallbackManager(callbackManager, () => {
      return chatEngine.chat({
        message: userMessageContent,
        chatHistory: messages as ChatMessage[],
        stream: true,
      });
    });

    // Transform LlamaIndex stream to Vercel/AI format
    const stream = LlamaIndexStream(response, vercelStreamData, {
      parserOptions: {
        image_url: data?.imageUrl,
      },
    });

    // Return a StreamingTextResponse, which can be consumed by the Vercel/AI client
    return new StreamingTextResponse(stream, {}, vercelStreamData);
  },
  {
    error: ({ error }) => {
      console.error("Error occurred during: ", error);
    },
  }
);
