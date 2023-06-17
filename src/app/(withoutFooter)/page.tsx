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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {shopList.map((shop) => (
        <div key={shop.id}>
          <p>{shop.shop_name}</p>
          <p>{shop.food_tag}</p>
          <p>{shop.is_cashless ? 'キャッシュレス対応' : ''}</p>
          <p>{shop.created_at}</p>
        </div>
      ))}
    </main>
  );
}
