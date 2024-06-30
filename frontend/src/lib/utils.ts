import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkEnvConfigs = (configs: Record<string, string>[]) => {
  for (const config of configs) {
    for (const [key, value] of Object.entries(config)) {
      if (!value) {
        throw new Error(`Missing configuration for key ${key}`);
      }
    }
  }
};

export const sleep = (time: number = 500): Promise<void> => new Promise((resolve) => setTimeout(resolve, time));
