import { IconMapSearch, IconArrowBackUp } from '@tabler/icons-react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const footer = tv({
  slots: {
    base: 'fixed bottom-[0vh] w-full max-w-3xl bg-mauve-2 py-2',
    nav: 'mx-4 flex justify-around gap-6',
    text: 'text-xs',
    iconArea: 'flex flex-col items-center text-sm',
  },
});

const { base, nav, text, iconArea } = footer();

type Props = {
  lat: string;
  lng: string;
  dayOfWeek: string;
};

export const Footer: React.FC<Props> = ({ lat, lng, dayOfWeek }) => {
  return (
    <footer className={base()}>
      <nav className={nav()}>
        {/* <button className={iconArea()}>
          <IconStar size={24} />
          <p className={text()}>お気に入り</p>
        </button> */}

        <Link href={`/${dayOfWeek}`} className={iconArea()}>
          <IconArrowBackUp size={24} />
          <p className={text()}>戻る</p>
        </Link>
        {/* <button className={iconArea()}>
          <IconShare2 size={24} />
          <p className={text()}>共有</p>
        </button> */}
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
