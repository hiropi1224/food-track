import { fetchFoodList } from '@/app/_actions/fetch-menu';
import { fetchShop } from '@/app/_actions/fetch-shop';
import { Footer } from '@/app/_components/footer';
import { ShopDetail } from '@/app/_components/shop-detail';

export default async function DayOfWeek({
  params,
}: {
  params: { id: string };
}) {
  const shop = await fetchShop(params.id);
  const foodList = await fetchFoodList(params.id);

  return (
    <main className='mb-12'>
      <ShopDetail shop={shop} foodList={foodList} />
      <Footer
        shopId={shop.id}
        lat={shop.lat}
        lng={shop.lng}
        dayOfWeek={shop.business_day}
      />
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
