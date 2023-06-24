import {
  IconMapSearch,
  IconArrowBackUp,
  IconBuildingStore,
} from '@tabler/icons-react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const footer = tv({
  slots: {
    base: 'fixed bottom-[0vh] w-full max-w-3xl bg-mauve-2 py-2 opacity-70',
    nav: 'mx-4 flex justify-around gap-6',
    text: 'text-xs',
    iconArea: 'flex flex-col items-center text-sm',
  },
});

const { base, nav, text, iconArea } = footer();

type Props = {
  shopId: string;
  lat: string;
  lng: string;
  dayOfWeek: string;
};

export const Footer: React.FC<Props> = ({ shopId, lat, lng, dayOfWeek }) => {
  return (
    <footer className={base()}>
      <nav className={nav()}>
        <Link href={`/${dayOfWeek}`} className={iconArea()}>
          <IconArrowBackUp size={24} />
          <p className={text()}>戻る</p>
        </Link>
        <Link href={`/shop/${shopId}`} className={iconArea()}>
          <IconBuildingStore size={24} />
          <p className={text()}>店舗詳細</p>
        </Link>
        <Link
          href={`https://maps.google.com/maps?q=${lat},${lng}`}
          target='_blank'
          rel='noopener noreferrer'
          className={iconArea()}
        >
          <IconMapSearch size={24} />
          <p className={text()}>Mapを開く</p>
        </Link>
      </nav>
    </footer>
  );
};
