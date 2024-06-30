import { CreateDataSourceCard, DataSourceCard } from '@/components/data-sources/data-source-card';
import { getDataSourcesAction } from '@/lib/actions/data-sources';

export default async function DataSourcesPage() {
  const { dataSources } = await getDataSourcesAction();

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <CreateDataSourceCard />
        {dataSources.map((ds) => (
          <DataSourceCard dataSource={ds} key={ds.name} />
        ))}
      </div>
    </main>
  );
}
