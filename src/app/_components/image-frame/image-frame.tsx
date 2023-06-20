import Image from 'next/image';

type Props = {
  shopId: string;
};

export const ImageFrame: React.FC<Props> = ({ shopId }) => {
  return (
    <>
      <Image
        alt=''
        src={`/${shopId}.png`}
        height={600}
        width={600}
        className='col-span-2 aspect-square w-full object-cover'
      />
    </>
  );
};
