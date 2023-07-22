import { redirect } from 'next/navigation';

export default async function Layout({
  params,
  children,
}: {
  params: { dayOfWeek: string };
  children: React.ReactNode;
}) {
  if (!isBusinessDay(params.dayOfWeek)) {
    const day = new Date().getDay().toString();
    // 土日の場合は月曜を表示
    const dayOfWeek = day === '0' || day === '6' ? '1' : day;
    redirect(`/${dayOfWeek}`);
  }

  return <main>{children}</main>;
}

/**
 * 平日かどうかを判定する
 * @param dayOfWeek
 * @returns boolean
 */
const isBusinessDay = (dayOfWeek: string) => {
  return Number(dayOfWeek) >= 1 && Number(dayOfWeek) <= 5;
};
