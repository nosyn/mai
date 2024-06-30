import { BotCard, CreateBotCard } from '@/components/bots/bot-card';
import { getBotsAction } from '@/lib/actions/bots';

export default async function BotsPage() {
  const bots = await getBotsAction();

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <CreateBotCard />
        {bots.map((bot) => (
          <BotCard bot={bot} />
        ))}
      </div>
    </main>
  );
}
