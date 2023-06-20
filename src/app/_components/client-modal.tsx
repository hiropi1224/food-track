'use client';
import Link from 'next/link';

import { ImageFrame } from '@/app/_components/image-frame';
import { Modal } from '@/app/_components/modal';
import { useModal } from '@/app/_hooks/use-modal';

type Props = {
  photoId: string;
  dayOfWeek: string;
};

export const ClientModal: React.FC<Props> = ({ photoId, dayOfWeek }) => {
  const { isOpen, setIsOpen } = useModal();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ImageFrame photoId={photoId} />
      <div className='flex justify-center bg-mauve-2'>
        <Link
          href={`/${dayOfWeek}/${photoId}`}
          onClick={() => setIsOpen(false)}
        >
          <p>お店詳細へ</p>
        </Link>
      </div>
    </Modal>
  );
};
