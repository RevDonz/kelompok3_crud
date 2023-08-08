import React from "react";
import axios from "axios";


import {useState } from 'react';



const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: any) =>{
    e.preventDefault();

    try{
      const res = await axios.post('https://dummyjson.com/products/add', {
        title : name,
        price: price,

      });

      console.log(res.data.price)
      console.log(res.data.title)
      if(res.status --- 200){
        alert('')
      }
   


    console.log(res);
  } catch (e){
    console.log(e);
  }
}
  return (
    <div>
      <div className="min-h-screen mt-5 px-12">
        <h1 className="text-2xl font-bold mb-5 jus">Add Products</h1>
        <div className="w-3/4">
          <form
          className="bg-slate-700 p-5 rounded-lg flex flex-col gap-3 items-center w-1/1 mt0"
          onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="block mb-5">
              <span className="block mb-3 font-bold text-xl">name</span>
              <input
                type="text"
                className="bg-white p-1 w-1/1 outline-none rounded-lg text-slate-700"
                name="title"
                id="title"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="price" className="block mb-5">
              <span className="block mb-3 font-bold text-xl">price</span>
              <input
                type="text"
                className="bg-white p-1 w-full outline-none rounded-lg text-slate-700"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="block bg-white px-4 py-2 font-bold hover:bg-slate-300 text-sm rounded-lg text-black"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
