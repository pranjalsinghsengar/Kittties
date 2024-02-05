import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { useSelector } from "react-redux";

const Cart = () => {
  // const { userData } = useContext(Context);
  const data = useSelector((state) => state);

  console.warn("watch page", data);
  console.warn("Length", data);
  return (
    <div className='flex justify-center'>
      <div className=' text-9xl opacity-5 absolute justify-center items-center flex h-full'>
        EMPTY CART
      </div>
      {data.length ? (
        data.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-slate-100 m-3 p-6 rounded-xl shadow-md hover:shadow-none '
            >
              <div className='flex justify-between'>
                <button>X</button>
              </div>
              {item.firstName}
              <img className='w-32' src={item.image} />
            </div>
          );
        })
      ) : (
        <div className='absolute bottom-0 grid items-center'>
          <img src='https://media.tenor.com/xH-AneonkgsAAAAi/kitten-cat.gif' />
        </div>
      )}
    </div>
  );
};

export default Cart;
