const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-slate-700 p-5 rounded-lg flex flex-col gap-3 items-center w-1/2 mt-36'>
        <p className='text-xl font-semibold my-1 text-white'>Login</p>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='username' className='text-white '>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='password' className='text-white '>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <button className='px-3 py-2 w-full mt-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-md active:scale-105 transition-all'>
          Go To My Account
        </button>
      </div>
    </div>
  );
};

export default Home;
