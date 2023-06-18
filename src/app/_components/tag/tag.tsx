import { FC } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  type: 'cashless' | 'genre';
  text: string;
};

const tag = tv({
  base: 'flex w-fit items-center justify-center rounded-lg px-2 text-center text-xs sm:text-sm',
});

export const Tag: FC<Props> = ({ type, text }) => {
  const style = type === 'cashless' ? 'bg-tomato-9 text-mauve-1' : 'bg-mauve-5';

  return <div className={tag({ class: style })}>{text}</div>;
};
