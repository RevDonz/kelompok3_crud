import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EditProduct = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { id } = router.query;

  const fetchProductsById = async () => {
    try {
      const res = await axios(`https://dummyjson.com/products/${id}`);

      setName(res.data.title);
      setPrice(res.data.price);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.put(`https://dummyjson.com/products/${id}`, {
        title: name,
        price: price,
      });

      if (res.status === 200) {
        window.modal_edit.showModal();
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProductsById();
  }, []);

  return (
    <div className='min-h-screen mt-5 px-12'>
      <h1 className='text-2xl font-bold mb-5 jus'>Add Products</h1>
      <div className='w-3/4'>
        <form
          className='bg-slate-700 p-5 rounded-lg flex flex-col gap-3 items-center w-1/1 mt0'
          onSubmit={handleSubmit}
        >
          <label htmlFor='title' className='block mb-5'>
            <span className='block mb-3 font-bold text-xl'>name</span>
            <input
              type='text'
              className='bg-white p-1 w-1/1 outline-none rounded-lg text-slate-700'
              name='title'
              id='title'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor='price' className='block mb-5'>
            <span className='block mb-3 font-bold text-xl'>price</span>
            <input
              type='text'
              className='bg-white p-1 w-full outline-none rounded-lg text-slate-700'
              name='price'
              id='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button
            type='submit'
            className='block bg-white px-4 py-2 font-bold hover:bg-slate-300 text-sm rounded-lg text-black'
          >
            Save
          </button>
        </form>
      </div>
      <dialog id='modal_edit' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Edit Data Berhasil</h3>
          <p className='py-4'>Anda berhasil mengubah data {name}</p>
          <div className='modal-action'>
            <Link href={'/products'}>
              <button className='btn'>OK</button>
            </Link>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default EditProduct;
