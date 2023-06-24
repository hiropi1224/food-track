import Image from 'next/image';
import Link from 'next/link';

import { fetchShopId } from '@/app/_actions/fetch-shop-list';

export default async function Top() {
  const ids = await fetchShopId();

  return (
    <main className='flex flex-col items-center'>
      <div className='grid  gap-4 sm:grid-cols-2'>
        {ids.map((id) => (
          <Link key={id.id} href={`/photos/${id.id}`}>
            <Image src={`/shop/${id.id}.png`} alt='' height={200} width={320} />
          </Link>
        ))}
      </div>
    </main>
  );
}
