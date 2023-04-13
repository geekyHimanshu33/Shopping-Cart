import {React,useState} from "react";
import {AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";


export const CardItem = (props) => {
  const title = props.data.title.slice(0, 10);
  
  const description = props.data.description.slice(0, 100);
  const {cart} =useSelector((state) => state);
  const dispatch = useDispatch();

  

  function RemoveItem(){
    dispatch(remove(props.data.id));
  }
  return (
    <div className="w-[100%] px-6 py-4 bg-white rounded-[10px] shadow-2xl flex justify-between">
      <div className="">
        <img
          className="w-[150px] h-[200px]"
          src={props.data.image}
          alt=""
        ></img>
      </div>
      <div className="w-[70%] flex flex-col justify-between mb-4">
        <div>
        <h2 className="text-[20px] font-semibold ">{title}</h2>
        <p className="text-[15px] font-semibold text-gray-600">
          {description}..
        </p>

        </div>

        <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold text-gray-400">
            ${props.data.price}
        </p>

         <button onClick={RemoveItem}>
             <AiFillDelete className="text-red-500 text-[1.85rem]"/>
         </button>

        </div>
        
      </div>
    </div>
  );
};
export default CardItem;
