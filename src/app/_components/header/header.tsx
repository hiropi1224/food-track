import { IconTruckDelivery } from '@tabler/icons-react';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className='flex items-center gap-2 border-b-2 border-mauve-4'>
      <IconTruckDelivery size={36} />
      <h1 className='text-2xl sm:text-4xl'>FoodTracker</h1>
    </header>
  );
};
