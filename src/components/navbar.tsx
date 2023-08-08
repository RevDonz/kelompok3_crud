import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-16 bg-slate-700 w-full fixed z-10'>
      <div className='max-w-6xl mx-auto flex items-center justify-between h-full px-2 md:px-3'>
        <Link href={'/products'}>
          <p className='text-green-500 font-semibold text-2xl'>TokoLaku</p>
        </Link>

        <div className='flex gap-3'>
          <button className='px-3 py-2 bg-white hover:bg-slate-200 rounded-md active:scale-105 transition-all'>
            Profile
          </button>
          <Link href={'/'}>
            <button className='px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md active:scale-105 transition-all'>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
