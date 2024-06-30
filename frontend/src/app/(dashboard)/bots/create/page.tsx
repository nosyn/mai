import { CreateBotForm } from '@/components/bots/create-bot-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Bot',
};

export default async function CreateBotPage() {
  return (
    <main className="p-4">
      <CreateBotForm />
    </main>
  );
}
