import 'server-only';
import { Shop } from '@/app/_types/shop';

export const fetchShop = async (id: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/shop?id=eq.${id}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
        Authorization: process.env.authorization as string,
      }),
      next: { revalidate: 86400 },
    },
  );

  const shop: Shop[] = await res.json();

  return shop[0];
};
