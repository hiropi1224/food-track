import Image from 'next/image';

import { fetchShop } from '@/app/_components/_actions/fetch-shop';
import { Tag } from '@/app/_components/tag';

export default async function DayOfWeek({
  params,
}: {
  params: { id: string };
}) {
  const shop = await fetchShop(params.id);

  return (
    <main className=''>
      <div className='w-full py-2'>
        <div className='flex items-center justify-center space-x-4'>
          <Image
            className=''
            src={`/${shop.id}.png`}
            alt={shop.shop_name}
            height={200}
            width={320}
          />
        </div>
        <div className='my-2'>
          {shop.is_cashless ? (
            <Tag type='cashless' text='キャッシュレス対応' />
          ) : (
            <></>
          )}
        </div>
        <div className='flex justify-between'>
          <p className='text-xl font-bold'>{shop.shop_name}</p>
          <Tag type='genre' text={shop.food_tag} />
        </div>
        <div className='my-2 border-y border-mauve-4'>
          <p className=''>Menu</p>
          <p className=''>(coming soon)</p>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.url}/rest/v1/shop?select=id`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
      Authorization: process.env.authorization as string,
    }),
    next: { revalidate: 86400 },
  });

  const ids: { id: string }[] = await res.json();

  return ids.map((id) => ({
    id: id.id,
  }));
}
