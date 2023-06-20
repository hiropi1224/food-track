export const FoodMenu: React.FC = () => {
  return (
    <div className='flex'>
      <div className='h-40 w-40 bg-mauve-4' />
      <div className='flex flex-col justify-between px-2 py-4'>
        <p className='text-lg font-bold'>料理</p>
        <p>金額</p>
      </div>
    </div>
  );
};
