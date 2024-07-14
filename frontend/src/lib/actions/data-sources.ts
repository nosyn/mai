'use server';

import { client } from '@/lib/vector-db/qdrant';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { APP_ROUTE } from '../const';
import { DataSourcesTable, insertDataSourceSchema } from '../database/schema';
import { db } from '../database';
import { v4 as uuidV4, validate } from 'uuid';
import { eq } from 'drizzle-orm';

export type CreateDataSource = {
  name: string;
};
export async function createDataSourceAction(formData: FormData) {
  const ds = insertDataSourceSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  await db.insert(DataSourcesTable).values({
    id: uuidV4(),
    ...ds,
  });

  await client.createCollection(ds.name, {
    vectors: {
      size: 4,
      distance: 'Cosine',
    },
  });
  console.log('Created collection name: ' + ds.name);

  revalidatePath(APP_ROUTE.DATA_SOURCES.INDEX);
  redirect(APP_ROUTE.DATA_SOURCES.INDEX);
}

export const getDataSourcesAction = async () => {
  const dataSources = await db.query.DataSourcesTable.findMany();

  return {
    dataSources,
  };
};

export const fetchDataSourceAction = async (id: string) => {
  const isValidUUID = validate(id);

  if (!isValidUUID) {
    return null;
  }

  const ds = await db.query.DataSourcesTable.findFirst({
    where: eq(DataSourcesTable.id, id),
  });

  if (!ds) {
    throw new Error(`Couldn't find data source in the database`);
  }

  const collection = await client.getCollection(ds.name);

  return { ...ds, ...collection };
};
