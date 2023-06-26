'use client';

import { ImageFrame } from '@/app/_components/image-frame';
import { Modal } from '@/app/_components/modal';
import { useModal } from '@/app/_hooks/use-modal';

type Props = {
  photoId: string;
  dayOfWeek: string;
};

export const ClientModal: React.FC<Props> = ({ photoId }) => {
  const { isOpen, setIsOpen } = useModal();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ImageFrame photoId={photoId} />
    </Modal>
  );
};
