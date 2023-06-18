import Link from 'next/link';

import { ShopCard } from '@/app/_components/shop-card';
import { Tabs } from '@/app/_components/tabs';
import { Shop } from '@/app/_types/shop';

type Props = {
  shopList: Shop[];
  dayOfWeek: string;
};

export const ShopList: React.FC<Props> = ({ shopList, dayOfWeek }) => {
  return (
    <>
      <Tabs tabs={tabs} />
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

const tabs = [
  { path: '/1', tabText: 'Mon' },
  { path: '/2', tabText: 'Tue' },
  { path: '/3', tabText: 'Wed' },
  { path: '/4', tabText: 'Thu' },
  { path: '/5', tabText: 'Fri' },
];
