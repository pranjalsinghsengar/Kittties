import React, { useContext } from "react";
import Button from "../components/Button";
import { Context } from "../context/AppContext";
import Bttn from "../components/Button";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/action";

const Main = () => {
  const { userData } = useContext(Context);

  console.log(userData);
  const dispatch = useDispatch();
  return (
    <div className='w-full h-full relative'>
      <div className=' flex justify-center '>
        <div className='w-11/12 flex justify-between items-center h-14 fixed bg-gradient-to-b from-white via-slate-50 via-50% to-transparent'>
          <div className='w-32'>
            <img src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold'>REST api...</h1>
          <div>Watch</div>
        </div>
      </div>
      {userData.length && (
        <div className='flex justify-center fixed bottom-0  w-full h-20  bg-gradient-to-b from-transparent via-slate-50 via-9D0% to-white '>
          {/* <div className=' '></div> */}
          <Bttn
            btnText='+'
            btnStyle={{
              position: "absolute",
              bottom: 20,
              borderRadius: 500,
              width: 150,
              height: 50,
              color: "black",
            }}
            className='bg-white text-5xl font-medium '
          />
        </div>
      )}

      {/* running dogs */}
      {/* <img src='https://media.tenor.com/FFL1QxcDF64AAAAi/dog-cute.gif' /> */}

      <div className=' flex justify-center mt-20 '>
        <div className='flex flex-wrap justify-center overflow-hidden'>
          {userData.length ? (
            userData.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-slate-100 m-3 p-6 rounded-xl shadow-md hover:shadow-none '
                >
                  <div className='flex justify-between'>
                    <button onClick={() => dispatch(AddToCart(item))}>
                      add to cart
                    </button>
                    <button>X</button>
                  </div>
                  {item.firstName}
                  <img className='w-32' src={item.image} />
                </div>
              );
            })
          ) : (
            <div className='mt-52 grid items-center'>
              <img src='https://media.tenor.com/xH-AneonkgsAAAAi/kitten-cat.gif' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
