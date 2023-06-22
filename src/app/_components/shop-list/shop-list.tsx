import Link from 'next/link';

import { ShopCard } from '@/app/_components/shop-card';
import { Shop } from '@/app/_types/shop';

type Props = {
  shopList: Shop[];
  dayOfWeek: string;
};

export const ShopList: React.FC<Props> = ({ shopList, dayOfWeek }) => {
  return (
    <>
      {shopList.map((shop) => (
        <div
          key={shop.id}
          className='w-full border-b border-mauve-4 px-4 pb-2 sm:px-20'
        >
          <Link href={`/${dayOfWeek}/${shop.id}`}>
            <ShopCard shop={shop} />
          </Link>
        </div>
      ))}
    </>
  );
};
