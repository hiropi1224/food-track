/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal: React.FC<Props & React.PropsWithChildren> = ({
  children,
  isOpen = true,
  setIsOpen,
}) => {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();

  const onDismiss = useCallback(() => {
    setIsOpen(false);
    router.back();
  }, [router, setIsOpen]);

  const onClick = useCallback(
    (e: any) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          setIsOpen(false);
          onDismiss();
        }
      }
    },
    [onDismiss, overlay, wrapper, setIsOpen]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        onDismiss();
      }
    },
    [onDismiss, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    isOpen && (
      <div
        // @ts-ignore
        ref={overlay}
        className='fixed inset-0 z-10 mx-auto bg-mauve-11/60'
        onClick={onClick}
      >
        <div
          // @ts-ignore
          ref={wrapper}
          className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2'
        >
          <div className='relative'>
            <button
              onClick={onDismiss}
              className='absolute right-5 top-5 h-8 w-8'
            >
              <IconX className='h-8 w-8' />
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
