import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDramaBySlug } from '@/lib/drama';

export default async function DetailPage({ params }: { params: { slug: string } }) {
  const drama = await getDramaBySlug(params.slug);
  if (!drama) return notFound();

  return (
    <div className="relative pb-20">
      {/* Background Blur */}
      <div className="absolute inset-0 h-[500px] w-full overflow-hidden -z-10">
        <Image src={drama.poster} alt="bg" fill className="object-cover blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 pt-10">
        <Link href="/" className="text-gray-400 hover:text-white text-sm mb-6 inline-block">← Kembali ke Home</Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-[160px] md:w-[220px] flex-shrink-0 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl">
            <Image src={drama.poster} alt={drama.title} width={300} height={450} className="w-full h-auto" priority />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{drama.title}</h1>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-2xl">{drama.synopsis}</p>
            
            {/* Grid Episode */}
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Pilih Episode</h3>
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {drama.episodes.map((ep: any) => (
                  <Link key={ep.episode} href={`/watch/${params.slug}/${ep.episode}`} 
                    className="bg-gray-700 hover:bg-red-600 text-white py-2 rounded text-center text-sm font-bold transition">
                    {ep.episode}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
