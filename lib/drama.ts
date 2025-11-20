import fs from 'fs';
import path from 'path';

const databaseDirectory = path.join(process.cwd(), 'database');

// Tipe data sederhana
export interface Drama {
  id: string;
  title: string;
  slug: string;
  poster: string;
  status?: string;
  last_episode?: number;
  synopsis?: string;
  genres?: string[];
  episodes?: { episode: number; title: string; video_url: string }[];
}

export async function getAllDramas() {
  // Membaca database/dramas.json
  const filePath = path.join(databaseDirectory, 'dramas.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getDramaBySlug(slug: string) {
  // Membaca database/details/[slug].json
  const filePath = path.join(databaseDirectory, 'details', `${slug}.json`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}
