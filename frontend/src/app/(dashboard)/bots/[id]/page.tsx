import { fetchBotAction } from '@/lib/actions/bots';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Bot - Mai',
};

type BotPageProps = {
  params: {
    id: string;
  };
};

export default async function BotPage({ params }: BotPageProps) {
  const id = params.id;
  const bot = await fetchBotAction(id);

  if (!bot) {
    notFound();
  }

  return <main className="p-4">Hello bot: {bot.name} </main>;
}
