import { fetchShop } from '@/app/_components/_actions/fetch-shop';
import { ClientModal } from '@/app/_components/client-modal';

export default async function PhotoPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const shop = await fetchShop(photoId);

  return (
    <div className='container mx-auto my-10'>
      <div className='mx-auto w-full border border-mauve-7 sm:w-5/6'>
        <ClientModal photoId={photoId} dayOfWeek={shop.business_day} />
      </div>
    </div>
  );
}
