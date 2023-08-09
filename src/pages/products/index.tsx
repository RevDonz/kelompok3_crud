import Product from '@/components/product';
import axios from 'axios';
import Link from 'next/link';

import { useEffect, useState } from 'react';

export type ProductType = {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
};


const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await axios('https://dummyjson.com/products', {
        params: {
          limit: 10,
        },
      });

      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <p className='text-4xl text-white font-semibold'>Products</p>
        <Link href={'/products/add'}>
          <button className='px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md active:scale-105 transition-all'>
            Add New Product
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {products.map((product: ProductType, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
