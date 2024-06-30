'use server';

import { DrizzleError, eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { v4 as uuidV4, validate } from 'uuid';
import { APP_ROUTE } from '../const';
import { db } from '../database';
import { BotsTable, insertBotSchema } from '../database/schema';

export const getBotsAction = async () => {
  const bots = await db.query.BotsTable.findMany();

  return bots;
};

export const createBotFormAction = async (formData: FormData) => {
  const bot = insertBotSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  await db.insert(BotsTable).values({
    id: uuidV4(),
    ...bot,
  });

  redirect(APP_ROUTE.BOTS.INDEX);
};

export const fetchBotAction = async (id: string) => {
  const isValidUUID = validate(id);

  if (!isValidUUID) {
    return null;
  }

  const bot = await db.query.BotsTable.findFirst({
    where: eq(BotsTable.id, id),
  });

  return bot;
};
