import 'server-only';
import { Detail } from '@/app/_types/detail';

export const fetchDetail = async (id: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/detail?shop_id=eq.${id}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
        Authorization: process.env.authorization as string,
      }),
      next: { revalidate: 86400 },
    }
  );

  const detail: Detail[] = await res.json();

  return detail[0];
};
