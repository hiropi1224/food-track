import { IconTruckDelivery } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';

const day = new Date().getDay();
const dayOfWeek = day === 0 || day === 7 ? '1' : String(day);

export const Header: FC = () => {
  return (
    <header className='mb-2 border-b-2 border-mauve-4'>
      <Link href={`/${dayOfWeek}`}>
        <div className='flex items-center gap-2'>
          <IconTruckDelivery size={36} />
          <h1 className='text-2xl sm:text-4xl'>FoodTracker</h1>
        </div>
      </Link>
    </header>
  );
};
