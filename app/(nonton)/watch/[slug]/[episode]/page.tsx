import Link from 'next/link';
import { getDramaBySlug } from '@/lib/drama';
import { Metadata } from 'next';

type Props = { params: { slug: string; episode: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const drama = await getDramaBySlug(params.slug);
  if (!drama) return { title: 'Nonton Drama' };
  return {
    title: `Nonton ${drama.title} Episode ${params.episode}`,
    description: `Streaming ${drama.title} Ep ${params.episode} Sub Indo.`,
    openGraph: { images: [drama.poster] }
  };
}

export default async function WatchPage({ params }: Props) {
  const drama = await getDramaBySlug(params.slug);
  if (!drama) return <div>Drama tidak ditemukan</div>;

  const currentEpNum = parseInt(params.episode);
  const currentEp = drama.episodes.find((e: any) => e.episode === currentEpNum);
  const nextEp = drama.episodes.find((e: any) => e.episode === currentEpNum + 1);

  if (!currentEp) return <div>Episode tidak tersedia</div>;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* VIDEO PLAYER (Sticky Top) */}
      <div className="sticky top-0 z-10 w-full aspect-video bg-black shadow-lg border-b border-gray-800">
        <video controls autoPlay playsInline controlsList="nodownload" poster={drama.poster} className="w-full h-full object-contain">
          <source src={currentEp.video_url} type="video/mp4" />
          Browser tidak support video.
        </video>
      </div>

      {/* KONTROL NAVIGASI (No Gap) */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 pb-24">
        <h1 className="text-lg font-bold text-white mb-1">{drama.title}</h1>
        <p className="text-gray-400 text-sm mb-6">Episode {currentEpNum} • {currentEp.title}</p>

        <div className="flex gap-4">
          <Link href={`/drama/${params.slug}`} className="px-4 py-3 rounded bg-gray-800 text-white text-sm font-medium">
            List Episode
          </Link>
          {nextEp ? (
            <Link href={`/watch/${params.slug}/${nextEp.episode}`} className="flex-1 text-center px-4 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition">
              Lanjut Episode {nextEp.episode} →
            </Link>
          ) : (
            <button disabled className="flex-1 px-4 py-3 rounded bg-gray-700 text-gray-500 text-sm">Episode Terakhir</button>
          )}
        </div>
      </div>
    </div>
  );
}
