import { fetchShop } from '@/app/_actions/fetch-shop';
import { ClientModal } from '@/app/_components/client-modal';

export default async function PhotoModal({
  params: { photoId: photoId },
}: {
  params: { photoId: string };
}) {
  const shop = await fetchShop(photoId);

  return <ClientModal photoId={photoId} dayOfWeek={shop.business_day} />;
}
