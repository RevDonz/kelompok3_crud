import { ProductType } from "@/pages/products";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "./../pages/index";

interface IProduct {
  product: ProductType;
}

const Product = ({ product }: IProduct) => {
  // Generate unique modal IDs using the product ID
  const modalDeleteId = `modal_delete_${product.id}`;
  const modalFailedId = `modal_failed_${product.id}`;
  const modalSuccessId = `modal_success_${product.id}`;

  const handleDelete = async (id: number, modalSuccessId: string) => {
    try {
      const res = await axios.delete(`https://dummyjson.com/products/${id}`);

      console.log(`modal delete: ${modalDeleteId}`);
      console.log(`modal delete: ${modalFailedId}`);
      console.log(`modal delete: ${modalSuccessId}`);
      console.log(`isDeleted: ${res.data.isDeleted}`); // Log the value of isDeleted

      if (res.data.isDeleted === true) {
        document.getElementById(modalSuccessId).show();
        const modalSuccess = window.modal_success;
        modalSuccess.showModal();
        console.log(res);
        console.log("Successful deletion");
      } else {
        const modalFailed = window.modal_failed;
        modalFailed.showModal();
        console.log("Failed deletion");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-700 p-3 rounded-lg text-white flex flex-col justify-between">
      <div className="relative h-48 bg-white rounded-md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-lg">{product.title}</p>
        <p>$ {product.price}</p>
      </div>
      {/* <div className='flex gap-3 mt-3'>
        <button
          className="px-3 py-1 text-red-500 bg-white hover:bg-red-500 hover:text-white border-2 border-red-500 rounded-md active:scale-105 transition-all"
          onClick={() => handleDelete(product)}
        >
          Remove
        </button>
        <Link href={`products/${product.id}`}>
          <button className='px-3 py-1 text-green-500 bg-white hover:bg-green-500 hover:text-white border-2 border-green-500 rounded-md active:scale-105 transition-all'>
            Edit
          </button>
        </Link>
      </div> */}

      <div className="flex gap-2 mt-3 justify-end">
        <Link href={`products/${product.id}`}>
          <button className="btn btn-outline btn-info px-3 py-1">Edit</button>
        </Link>

        <button
          className="btn btn-outline btn-error px-3 py-1"
          onClick={() => document.getElementById(modalDeleteId).show()}
        >
          Remove
        </button>

        <dialog id={modalDeleteId} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Delete this product</h3>
            <p className="py-4">
              Are you sure you want to delete {product.title}?
            </p>
            <div className="modal-action">
              <button
                className="btn btn-outline btn-success"
                onClick={() => handleDelete(product.id, modalSuccessId)}
              >
                Yes
              </button>
              <button
                className="btn btn-outline btn-error"
                onClick={() => document.getElementById(modalFailedId).show()}
              >
                Cancel
              </button>
            </div>
          </form>
        </dialog>
        {/* Unsuccessful Deletion */}
        <dialog id={modalFailedId} className="modal">
          <form method="dialog" className="modal-box">
            {/* <h3 className="font-bold text-lg">Item deleted</h3> */}
            <p className="py-4">{product.title} not deleted</p>
            <div className="modal-action">
              <button className="btn btn-outline">OK</button>
            </div>
          </form>
        </dialog>
        {/* Successful Deletion */}
        <dialog id={modalSuccessId} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Item deleted</h3>
            <p className="py-4">
              {product.title} has been successfully deleted
            </p>
            <div className="modal-action">
              <button className="btn btn-outline">OK</button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Product;
