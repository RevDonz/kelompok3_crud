import { ProductType } from '@/pages/products';
import Image from 'next/image';

interface IProduct {
  product: ProductType;
}

const Product = ({ product }: IProduct) => {
  return (
    <div className='bg-slate-700 p-3 rounded-lg text-white flex flex-col justify-between'>
      <div className='relative h-48 bg-white rounded-md'>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className='object-contain'
        />
      </div>
      <div className='flex flex-col gap-1 mt-3'>
        <p className='text-lg'>{product.title}</p>
        <p>$ {product.price}</p>
      </div>
      <div className='flex gap-3 mt-3'>
        <button className='px-3 py-1 text-red-500 bg-white hover:bg-red-500 hover:text-white border-2 border-red-500 rounded-md active:scale-105 transition-all'>
          Remove
        </button>
        <button className='px-3 py-1 text-green-500 bg-white hover:bg-green-500 hover:text-white border-2 border-green-500 rounded-md active:scale-105 transition-all'>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Product;
