import { Shop } from '@/app/_types/shop';

export const sortByShopList = (objects: Shop[]): Shop[] => {
  return objects.sort((a, b) => {
    if (Number(a.business_day) < Number(b.business_day)) {
      return -1;
    } else if (Number(a.business_day) > Number(b.business_day)) {
      return 1;
    } else {
      return 0;
    }
  });
};
