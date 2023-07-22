import { fetchShopListForDayOfWeek } from '@/app/_actions/fetch-shop-list';
import { ShopList } from '@/app/_components/shop-list';
import { Tabs } from '@/app/_components/tabs';
import { tabs } from '@/app/_const/tabs';

export default async function DayOfWeek({
  params,
}: {
  params: { dayOfWeek: string };
}) {
  const shopList = await fetchShopListForDayOfWeek(params.dayOfWeek);

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Tabs tabs={tabs} />
      <ShopList shopList={shopList} dayOfWeek={params.dayOfWeek} />
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.url}/rest/v1/shop?select=business_day`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
        Authorization: process.env.authorization as string,
      }),
      next: { revalidate: 86400 },
    },
  );

  const dayOfWeeks: { business_day: string }[] = await res.json();

  return dayOfWeeks.map((dayOfWeek) => ({
    dayOfWeek: dayOfWeek.business_day,
  }));
}
