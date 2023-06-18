import { Tag } from '@/app/_components/tag';
import { Shop } from '@/app/_types/shop';

type Props = {
  shop: Shop;
};

export const ShopCard: React.FC<Props> = ({ shop }) => {
  return (
    <div className='w-full py-2'>
      <div className='sm:flex sm:justify-between'>
        <p className='text-xl font-bold'>{shop.shop_name}</p>
        {shop.is_cashless ? (
          <Tag type='cashless' text='キャッシュレス決済対応' />
        ) : (
          <></>
        )}
      </div>
      <div className='my-2 flex space-x-4'>
        <div className='aspect-square w-1/2 bg-mauve-4 ' />
        <div className='aspect-square w-1/2 bg-mauve-4 ' />
      </div>
      <div className='flex justify-end'>
        <Tag type='genre' text={shop.food_tag} />
      </div>
    </div>
  );
};
