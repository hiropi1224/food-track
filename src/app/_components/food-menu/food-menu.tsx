import fs from 'fs';

import Image from 'next/image';
type Props = {
  foodName: string;
  price: string;
  id: string;
};

export const FoodMenu: React.FC<Props> = ({ foodName, price, id }) => {
  const imagePath = `/food/${id}.png`;
  const fallbackImagePath = '/food/noimage.png';
  const isImagePath = fs.existsSync(`public${imagePath}`);

  return (
    <div className='flex gap-2 border-b border-mauve-7 py-2'>
      <div className='flex h-40 w-40 items-center justify-center'>
        <Image
          src={isImagePath ? imagePath : fallbackImagePath}
          alt=''
          height={isImagePath ? 160 : 100}
          width={isImagePath ? 160 : 100}
          className='aspect-square'
        />
      </div>
      <div className='flex flex-col justify-between px-2 py-4'>
        <p className='text-lg font-bold'>{foodName}</p>
        <p>{price}円</p>
      </div>
    </div>
  );
};

export const SkeletonMenu: React.FC = () => {
  return (
    <div className='flex gap-2 border-b border-mauve-7 py-2'>
      <div className='h-40 w-40 bg-mauve-2' />
      <div className='px-2 py-4'>
        <p className='text-lg font-bold'>Coming soon</p>
        <p>メニュー情報がありません。</p>
      </div>
    </div>
  );
};
