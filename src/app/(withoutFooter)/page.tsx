import { ShopCard } from '@/app/_components/shop-card/shop-card';
import { Database } from '@/app/_types/database.types';
type Shop = Database['public']['Tables']['shop']['Row'];

const fetchShopList = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/shop?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
      Authorization: process.env.authorization as string,
    }),
  });

  const shopList: Shop[] = await res.json();

  return shopList;
};

export default async function Top() {
  const shopList = await fetchShopList();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      {shopList.map((shop) => (
        <div
          key={shop.id}
          className='w-full border-b border-mauve-4 px-4 pb-2 sm:px-20'
        >
          <ShopCard shop={shop} />
        </div>
      ))}
    </main>
  );
}
