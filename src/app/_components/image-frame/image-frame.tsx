import Image from 'next/image';

type Props = {
  photoId: string;
};

export const ImageFrame: React.FC<Props> = ({ photoId }) => {
  return (
    <>
      <Image
        alt=''
        src={`/${photoId}.png`}
        height={600}
        width={600}
        className='col-span-2 w-full object-cover'
      />
    </>
  );
};
