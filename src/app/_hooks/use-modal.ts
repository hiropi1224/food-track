'use client';
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return { isOpen, setIsOpen };
};
