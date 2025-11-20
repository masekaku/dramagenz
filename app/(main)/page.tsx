import Link from 'next/link';
import Image from 'next/image';
import { getAllDramas, Drama } from '@/lib/drama';

export default async function HomePage() {
  const dramas: Drama[] = await getAllDramas();

  return (
    <main className="container mx-auto p-4">
      <header className="mb-8 mt-4 border-b border-gray-800 pb-4">
        <h1 className="text-2xl font-bold text-red-500">Drama<span className="text-white">China</span></h1>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dramas.map((drama) => (
          <Link key={drama.id} href={`/drama/${drama.slug}`} className="group block bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-600 transition">
            <div className="relative aspect-[2/3] w-full bg-gray-700">
              <Image
                src={drama.poster}
                alt={drama.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-0 right-0 bg-red-600 text-xs font-bold px-2 py-1 rounded-bl-lg">
                Ep {drama.last_episode}
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium truncate">{drama.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
