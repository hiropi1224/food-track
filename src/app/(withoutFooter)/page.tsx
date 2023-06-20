import Link from 'next/link';

import { ShopCard } from '@/app/_components/shop-card/shop-card';
import { Shop } from '@/app/_types/shop';
import { sortByShopList } from '@/app/_utils';

const fetchShopList = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/shop?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
      Authorization: process.env.authorization as string,
    }),
    next: { revalidate: 86400 },
  });

  const shopList: Shop[] = await res.json();

  return shopList;
};

export default async function Top() {
  const shopList = await fetchShopList();
  const sortedList = sortByShopList(shopList);

  return (
    <main className='flex min-h-screen flex-col items-center'>
      {sortedList.map((shop) => (
        <div
          key={shop.id}
          className='w-full border-b border-mauve-4 px-4 pb-2 sm:px-20'
        >
          <Link href={`/${shop.id}`}>
            <ShopCard shop={shop} />
          </Link>
        </div>
      ))}
    </main>
  );
}
