import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';

type Props = {
  type: 'twitter' | 'instagram' | 'facebook';
  url: string | null;
};

export const SnsLink: React.FC<Props> = ({ type, url }) => {
  return (
    url && (
      <Link href={url} target='_blank' rel='noopener noreferrer'>
        <div>
          {type === 'instagram' && <IconBrandInstagram size={40} />}
          {type === 'twitter' && <IconBrandTwitter size={40} />}
          {type === 'facebook' && <IconBrandFacebook size={40} />}
        </div>
      </Link>
    )
  );
};
