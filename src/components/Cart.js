import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [TotalPrice,setTotalPrice] = useState(0) ;

  function totalprice(){
    let result = 0;
    cart.map((item) => (
        result += Number(item.price)
    ))
    setTotalPrice(result);
  }

 
  useEffect(()=>{
    totalprice();
  },[cart])
  return (
    <div>
      {cart.length === 0 && (
        <div className=" flex justify-center ">
          <div className="flex flex-col items-center mt-60">
            <h3 className="my-1 font-semibold">Your Cart Is Empty</h3>
            <Link to="/">
              <button className="bg-gray-500 hover:bg-gray-400 transition-all duration-200 rounded-full px-4 py-1 text-white font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className=" w-[1080px] mx-auto py-12 px-7 flex justify-between">
          <div className="w-[60%] flex flex-col gap-y-5">
            {cart.map((item) => (
              <CardItem data={item} key={item.id}></CardItem>
            ))}
          </div>
          <div className="w-[30%] flex flex-col justify-between">
            <div>
              <h1 className="text-[2rem] font-semibold">Your Summary</h1>
              <p className="">
                Total items : <span>{cart.length}</span>
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-semibold">Total Price : <span className="text-[1.5rem]">${TotalPrice}</span> </h2>
              <button className="bg-gray-500 hover:bg-gray-400 transition-all duration-200 text-[1.2rem] rounded-full px-4 py-1 text-white font-semibold" >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
