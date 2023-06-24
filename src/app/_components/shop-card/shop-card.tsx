import Image from 'next/image';

import { Tag } from '@/app/_components/tag';
import { Shop } from '@/app/_types/shop';

type Props = {
  shop: Shop;
};

export const ShopCard: React.FC<Props> = ({ shop }) => {
  return (
    <div className='w-full py-2'>
      <div className='sm:flex sm:justify-between'>
        <p className='font-bold sm:text-xl'>{shop.shop_name}</p>
        {shop.is_cashless ? (
          <Tag type='cashless' text='キャッシュレス対応' />
        ) : (
          <></>
        )}
      </div>
      <div className='my-2 flex items-center justify-center space-x-4'>
        <Image
          src={`/shop/${shop.id}.png`}
          alt={shop.shop_name}
          height={320}
          width={320}
          className='aspect-square'
        />
      </div>
      <div className='flex justify-end'>
        <Tag type='genre' text={shop.food_tag} />
      </div>
    </div>
  );
};
