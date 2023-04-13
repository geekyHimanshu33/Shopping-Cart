import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

export const Card = (props) => {
  const title = props.data.title.slice(0, 10);
  const description = props.data.description.slice(0, 100);
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function RemoveItem() {
    dispatch(remove(props.data.id));
  }

  function AddItem() {
    dispatch(add(props.data));
  }

  return (
    <div className=" bg-white max-w-[300px] min-h-[390px] py-6 px-6 rounded-[10px] hover:shadow-2xl hover:scale-105 transition-all duration-500">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-between gap-y-5">
          <h2 className="text-[20px] font-semibold ">{title}</h2>

          <p className="text-[15px] font-semibold text-gray-600">
            {description}..
          </p>

          <img
            className="w-[200px] h-[250px]"
            src={props.data.image}
            alt=""
          ></img>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="text-[18px] font-semibold text-gray-400">
            ${props.data.price}
          </p>

          {cart.some((p) => p.id === props.data.id) ? (
            <button
              className="bg-gray-500 hover:bg-gray-400 transition-all duration-200 rounded-full px-4 py-1 text-white font-semibold"
              onClick={RemoveItem}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="bg-gray-500 hover:bg-gray-400 transition-all duration-200 rounded-full px-4 py-1 text-white font-semibold"
              onClick={AddItem}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
