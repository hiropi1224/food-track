import { redirect } from 'next/navigation';

const day = new Date().getDay();
const dayOfWeek = day === 0 || day === 7 ? '1' : String(day);

export default async function Top() {
  redirect(`/${dayOfWeek}`);
}
