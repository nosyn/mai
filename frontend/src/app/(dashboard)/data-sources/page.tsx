import {
  CreateDataSource,
  DataSource,
} from "@/components/data-sources/data-source";
import client from "@/lib/client";

export default async function DataSourcesPage() {
  const { dataSources } = await client.getDataSources();

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <CreateDataSource />
        {dataSources.map((ds) => (
          <DataSource name={ds.name} key={ds.name} />
        ))}
      </div>
    </main>
  );
}
