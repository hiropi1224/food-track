'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { tv } from 'tailwind-variants';

const tab = tv({
  slots: {
    nav: 'flex w-full text-center',
    link: 'inline-block w-full border-b border-mauve-4 p-2',
    text: 'text-[#1A1523]',
    active: 'border-b-2 border-tomato-9 font-semibold',
  },
});

const { nav, link, text, active } = tab();

type Tab = {
  path: string;
  tabText: string;
};

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const pathname = usePathname();
  const tabsWithIsActive = tabs.map((tab) => ({
    ...tab,
    isActive: pathname === tab.path,
  }));

  return <TabsTemplate tabs={tabsWithIsActive} />;
};

type TabsTemplate = {
  path: string;
  tabText: string;
  isActive?: boolean;
};

type TabsTemplateProps = {
  tabs: TabsTemplate[];
};

export const TabsTemplate: FC<TabsTemplateProps> = ({ tabs }) => {
  return (
    <div className={nav()}>
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={link({
            class: tab.isActive ? active() : '',
          })}
        >
          <div className={text()}>{tab.tabText}</div>
        </Link>
      ))}
    </div>
  );
};
