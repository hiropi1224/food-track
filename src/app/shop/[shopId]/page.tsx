import Image from 'next/image';

import { fetchDetail } from '@/app/_actions/fetch-detail';
import { fetchShop } from '@/app/_actions/fetch-shop';

export default async function ShopDetail({
  params,
}: {
  params: { shopId: string };
}) {
  const detail = await fetchDetail(params.shopId);
  const shop = await fetchShop(params.shopId);

  return (
    <main>
      <div className='m-auto max-w-xl'>
        <Image
          className='aspect-auto'
          src={`/shop/${params.shopId}.png`}
          alt=''
          height={200}
          width={800}
        />
        <div className='p-3 font-bold'>{shop.shop_name}</div>
        <div className='flex flex-col gap-2 border-b border-mauve-7 p-3'>
          <div className='font-bold'>ジャンル</div>
          <div>{shop.food_tag}</div>
        </div>
        <div className='flex flex-col gap-2 border-b border-mauve-7 p-3'>
          <div className='font-bold'>営業日</div>
          <div>{shop.business_day}</div>
        </div>
        <div className='flex flex-col gap-2 border-b border-mauve-7 p-3'>
          <div className='font-bold'>決済方法</div>
          <div>{detail.cashless}</div>
        </div>
        <div className='flex flex-col gap-2 border-b border-mauve-7 p-3'>
          <div className='font-bold'>SNS</div>
          <div className='flex'>
            {detail.instagram && <p>instagram icon</p>}
            {detail.twitter && <p>twitter icon</p>}
            {detail.facebook && <p>facebook icon</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
