import { CreateDataSourceForm } from "@/components/data-sources/create-data-source-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Data Source",
};

export default async function CreateDataSourcePage() {
  return (
    <main className="p-4">
      <CreateDataSourceForm />
    </main>
  );
}
