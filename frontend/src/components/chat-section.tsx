'use client';

import { useChat } from 'ai/react';
import { ChatInput, ChatMessages } from './ui/chat';
import { useClientConfig } from './ui/chat/hooks/use-config';
import { Badge } from './ui/badge';

export default function ChatSection() {
  const { backend } = useClientConfig();
  const { messages, input, isLoading, handleSubmit, handleInputChange, reload, stop, append, setInput } = useChat({
    api: `${backend}/api/chat`,
    headers: {
      'Content-Type': 'application/json', // using JSON because of vercel/ai 2.2.26
    },
    onError: (error: unknown) => {
      if (!(error instanceof Error)) throw error;
      const message = JSON.parse(error.message);
      alert(message.detail);
    },
  });

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <Badge variant="outline" className="absolute right-3 top-3">
        Output
      </Badge>
      <ChatMessages messages={messages} isLoading={isLoading} reload={reload} stop={stop} append={append} />
      <ChatInput
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
        messages={messages}
        append={append}
        setInput={setInput}
      />
    </div>
  );
}
