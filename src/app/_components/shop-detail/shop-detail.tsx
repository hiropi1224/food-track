import Image from 'next/image';
import Link from 'next/link';

import { FoodMenu } from '@/app/_components/food-menu';
import { SkeletonMenu } from '@/app/_components/food-menu/food-menu';
import { Tag } from '@/app/_components/tag';
import { Food } from '@/app/_types/food';
import { Shop } from '@/app/_types/shop';

type Props = {
  shop: Shop;
  foodList: Food[];
};

export const ShopDetail: React.FC<Props> = ({ shop, foodList }) => {
  return (
    <div className='w-full py-2'>
      <div className='flex items-center justify-center space-x-4'>
        <Link key={shop.id} href={`/photos/${shop.id}`}>
          <Image
            src={`/shop/${shop.id}.png`}
            alt={shop.shop_name}
            height={320}
            width={320}
            className='aspect-square'
          />
        </Link>
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
        {foodList.length != 0 ? (
          foodList.map((food) => (
            <FoodMenu
              key={food.id}
              id={food.id}
              foodName={food.name}
              price={food.price}
            />
          ))
        ) : (
          <SkeletonMenu />
        )}
      </div>
    </div>
  );
};
