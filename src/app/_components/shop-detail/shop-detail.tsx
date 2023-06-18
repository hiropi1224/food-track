import Image from 'next/image';

import { Tag } from '@/app/_components/tag';
import { Shop } from '@/app/_types/shop';

type Props = {
  shop: Shop;
};

export const ShopDetail: React.FC<Props> = ({ shop }) => {
  return (
    <div className='w-full py-2'>
      <div className='flex items-center justify-center space-x-4'>
        <Image
          className=''
          src={`/${shop.id}.png`}
          alt={shop.shop_name}
          height={200}
          width={320}
        />
      </div>
      <div className='my-2'>
        {shop.is_cashless ? (
          <Tag type='cashless' text='キャッシュレス対応' />
        ) : (
          <></>
        )}
      </div>
      <div className='flex justify-between'>
        <p className='text-xl font-bold'>{shop.shop_name}</p>
        <Tag type='genre' text={shop.food_tag} />
      </div>
      <div className='my-2 border-y border-mauve-4'>
        <p>Menu</p>
        <p className='p-2'>coming soon</p>
      </div>
    </div>
  );
};
