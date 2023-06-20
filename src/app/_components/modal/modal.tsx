/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect } from 'react';

export const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: any) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      // @ts-ignore
      ref={overlay}
      className='bg-black/60 fixed inset-0 z-10 mx-auto'
      onClick={onClick}
    >
      <div
        // @ts-ignore
        ref={wrapper}
        className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2'
      >
        {children}
      </div>
    </div>
  );
};
