import { IconArrowBackUp } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { fetchDetail } from '@/app/_actions/fetch-detail';
import { fetchShop } from '@/app/_actions/fetch-shop';
import { SnsLink } from '@/app/_components/sns-link';
import { convertDayOfWeekCodeToString } from '@/app/_utils';

const shopDetail = tv({
  slots: {
    wrap: 'm-auto max-w-xl',
    link: 'absolute left-5 top-5 size-8 rounded-full bg-mauve-1 opacity-90',
    icon: 'size-8',
    shopName: 'p-3 text-xl font-bold',
    title: 'flex flex-col gap-2 border-b border-mauve-7 p-3',
    content: 'font-bold',
    sns: 'flex gap-5',
  },
});

const { wrap, link, icon, shopName, title, content, sns } = shopDetail();

export default async function ShopDetail({
  params,
}: {
  params: { shopId: string };
}) {
  const detail = await fetchDetail(params.shopId);
  const shop = await fetchShop(params.shopId);

  return (
    <main>
      <div className={wrap()}>
        <div className='relative'>
          <Image
            className='aspect-auto'
            src={`/shop/${params.shopId}.png`}
            alt=''
            height={200}
            width={800}
          />
          <Link href={`/${shop.business_day}/${shop.id}`} className={link()}>
            <IconArrowBackUp className={icon()} />
          </Link>
        </div>
        <div className={shopName()}>{shop.shop_name}</div>
        <div className={title()}>
          <div className={content()}>ジャンル</div>
          <div>{shop.food_tag}</div>
        </div>
        <div className={title()}>
          <div className={content()}>営業日</div>
          <div>{convertDayOfWeekCodeToString(shop.business_day)}</div>
        </div>
        {detail && (
          <>
            <div className={title()}>
              <div className={content()}>決済方法</div>
              <div>{detail.cashless}</div>
            </div>
            <div className={title()}>
              <div className={content()}>SNS</div>
              <div className={sns()}>
                <SnsLink type='instagram' url={detail.instagram} />
                <SnsLink type='twitter' url={detail.twitter} />
                <SnsLink type='facebook' url={detail.facebook} />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
