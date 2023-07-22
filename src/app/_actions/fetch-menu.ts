import 'server-only';
import { Food } from '@/app/_types/food';

export const fetchFoodList = async (shopId: string) => {
  const res = await fetch(
    `${process.env.url}/rest/v1/food?shop_id=eq.${shopId}&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
        Authorization: process.env.authorization as string,
      }),
      next: { revalidate: 86400 },
    },
  );

  const foodList: Food[] = await res.json();

  return foodList;
};
