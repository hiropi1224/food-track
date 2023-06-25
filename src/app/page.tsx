import Image from 'next/image';

import { fetchShopId } from '@/app/_actions/fetch-shop-list';

export default async function Top() {
  const ids = await fetchShopId();

  return (
    <main className='flex flex-col items-center'>
      <div className='grid  gap-4 sm:grid-cols-2'>
        {ids.map((id) => (
          <Image
            key={id.id}
            src={`/shop/${id.id}.png`}
            alt=''
            height={320}
            width={320}
            className='aspect-square'
          />
        ))}
      </div>
    </main>
  );
}
