import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { useDispatch } from "react-redux";
import Bttn from "../components/Button";
import { AddToCart } from "../redux/action";

const Home = () => {
  const { userData } = useContext(Context);
  console.log(userData);
  const dispatch = useDispatch();
  return (
    <>
      {userData.length && (
        <div className='flex justify-center fixed bottom-0  w-full h-20  bg-gradient-to-b from-transparent via-slate-50 via-9D0% to-white z-10 '>
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

      <div className=' flex justify-center mt-20 pb-32 '>
        <div className='flex flex-wrap justify-center '>
          {userData.length ? (
            userData.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-slate-100 m-3 p-6 rounded-xl shadow-md hover:shadow-none cursor-pointer relative'
                >
                  <div className='flex justify-between'></div>

                  <img className='w-32' src={item.image} />
                  <div className='bg-white pl-2 pr-2 rounded-2xl border hover:tracking-widest text-center transition duration-800 ease-out hover:ease-in flex justify-center'>
                    <p>{item.firstName}</p>

                    {/* >>>>>>>>> Add to cart  */}
                    {/* <img
                      className='w-6'
                      src='plus-small.png'
                      alt=''
                      onClick={() => dispatch(AddToCart(item))}
                    /> */}
                  </div>
                </div>
              );
            })
          ) : (
            <div className='h-full justify-center grid items-center relative'>
              <div className='absolute bottom-0 '>
                <img src='https://media.tenor.com/xH-AneonkgsAAAAi/kitten-cat.gif' />
              </div>
              <div className=' text-9xl opacity-5'>Loading...</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
