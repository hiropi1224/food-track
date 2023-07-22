import 'server-only';
import { Shop } from '@/app/_types/shop';

export const fetchShopListForDayOfWeek = async (dayOfWeek: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/shop?business_day=eq.${dayOfWeek}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
        Authorization: process.env.authorization as string,
      }),
      next: { revalidate: 86400 },
    },
  );

  const shopList: Shop[] = await res.json();

  return shopList;
};

export const fetchShopId = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/shop?select=id`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
      Authorization: process.env.authorization as string,
    }),
    next: { revalidate: 86400 },
  });

  const shopId: { id: string }[] = await res.json();

  return shopId;
};
