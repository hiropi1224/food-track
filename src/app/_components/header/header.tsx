import { IconTruckDelivery } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className='border-b-2 border-mauve-4'>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <IconTruckDelivery size={36} />
          <h1 className='text-2xl sm:text-4xl'>FoodTracker</h1>
        </div>
      </Link>
    </header>
  );
};
