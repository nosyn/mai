import { BotCard, CreateBotCard } from '@/components/bots/bot-card';

export default function BotsPage() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <CreateBotCard />
        <BotCard title="Mai" description="Hello Abc" />
        <BotCard title="Mai" description="Hello Abc" />
        <BotCard title="Mai" description="Hello Abc" />
        <BotCard title="Mai" description="Hello Abc" />
        <BotCard title="Mai" description="Hello Abc" />
      </div>
    </main>
  );
}
