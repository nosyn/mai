import ChatSection from "@/components/chat-section";
import ModelSettings from "@/components/llm/model-settings";

export default function HomePage() {
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <ModelSettings />
      <ChatSection />
    </main>
  );
}
