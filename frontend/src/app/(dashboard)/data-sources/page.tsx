import { DataSource } from "@/components/data-source";
import { getCollections } from "@/lib/actions/vector-db/qdrant";

export default async function GooglePage() {
  const { collections } = await getCollections();

  return (
    <main className="p-4">
      Data Sources
      <div className="grid grid-cols-3 gap-4">
        {collections.map((collection) => (
          <DataSource name={collection.name} key={collection.name} />
        ))}
      </div>
    </main>
  );
}
