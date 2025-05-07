import React, { useContext } from 'react';
import { Product } from '../context/Context';

const Shop = () => {
  const { data, setData } = useContext(Product);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[250px] object-contain p-4"
          />
          <div className="px-4 pb-4">
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-500">
              Sign in or create an account to see pricing
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
