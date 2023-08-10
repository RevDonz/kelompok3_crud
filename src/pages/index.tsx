import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

declare global {
  interface Window {
    modal_success: any;
    modal_failed: any;
    modal_edit: any;
  }
}

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://dummyjson.com/auth/login`, {
        username: username,
        password: password,
      });

      if (res.status === 200) {
        window.modal_success.showModal();
        console.log(res);
      }
    } catch (e) {
      window.modal_failed.showModal();
      console.log(e);
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        className='bg-slate-700 p-5 rounded-lg flex flex-col gap-3 items-center w-1/2 mt-36'
        onSubmit={handleSubmit}
      >
        <p className='text-xl font-semibold my-1 text-white'>Login</p>
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor='username' className='text-white '>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className='px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <button
          className='px-3 py-2 w-full mt-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-md active:scale-105 transition-all'
          type='submit'
        >
          Go To My Account
        </button>
      </form>
      <dialog id='modal_success' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Login Berhasil</h3>
          <p className='py-4'>Hallo anda berhasil login!</p>
          <div className='modal-action'>
            <Link href={'/products'}>
              <button className='btn'>OK</button>
            </Link>
          </div>
        </form>
      </dialog>
      <dialog id='modal_failed' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Login Gagal</h3>
          <p className='py-4'>Username atau Password salah!</p>
          <div className='modal-action'>
            <button className='btn'>OK</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Home;
