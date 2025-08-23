export function Loader() {
  return (
    <div className='flex justify-center items-center py-8'>
      <div className='relative inline-flex'>
        <div className='size-12 bg-indigo-500 rounded-full'></div>
        <div className='size-12 bg-indigo-500 rounded-full absolute top-0 left-0 animate-ping'></div>
        <div className='size-12 bg-indigo-500 rounded-full absolute top-0 left-0 animate-pulse'></div>
      </div>
    </div>
  );
}
