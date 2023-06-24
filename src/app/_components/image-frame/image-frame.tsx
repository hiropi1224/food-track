import Image from 'next/image';

type Props = {
  photoId: string;
};

export const ImageFrame: React.FC<Props> = ({ photoId }) => {
  return (
    <>
      <Image
        alt=''
        src={`/shop/${photoId}.png`}
        height={600}
        width={600}
        className='col-span-2 aspect-square w-full object-cover'
      />
    </>
  );
};
