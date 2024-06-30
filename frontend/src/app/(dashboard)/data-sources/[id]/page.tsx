import { fetchDataSourceAction } from '@/lib/actions/data-sources';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Data source - Mai',
};

type BotPageProps = {
  params: {
    id: string;
  };
};

export default async function DataSourcePage({ params }: BotPageProps) {
  const id = params.id;
  const ds = await fetchDataSourceAction(id);

  if (!ds) {
    notFound();
  }

  return <main className="p-4">Hello data source: {ds.name} </main>;
}
