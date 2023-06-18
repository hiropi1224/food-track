import { FC } from 'react';

type Props = {
  type: 'cashless' | 'genre';
  text: string;
};

export const Tag: FC<Props> = ({ type, text }) => {
  const style = type === 'cashless' ? 'bg-tomato-9 text-mauve-1' : 'bg-mauve-5';

  return (
    <div className={`w-fit rounded-lg px-2 text-center ${style}`}>{text}</div>
  );
};
