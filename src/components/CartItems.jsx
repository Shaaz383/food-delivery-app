import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart ,incrementQty , decrementQty } from "../redux/slices/CartSlices";
import toast from "react-hot-toast";


const CartItems = ({id,name,img,qty , price }) => {
  const dispatch=useDispatch();

  return (
    <div className="flex shadow-md rounded p-4">
      <img
        src={img}
        alt=""
        className="h-[50px] w-[50px]"
      />

      <div className="flex flex-col ">
        <h2 className="ml-2">{name}</h2>
        <MdDelete onClick={()=>{
        dispatch(removeFromCart({id,img,name,price,qty}))
        toast.error(`${name} Removed From Cart`); 
        }
        }
         className="absolute right-7 text-red-500"/>
        <div className="flex gap-4 items-center justify-between">
            <span className="text-green-500 font-bold ml-2">₹ {price}</span>
          <div className="flex gap-2 absolute right-7">
          
          <AiOutlineMinus onClick={()=>qty > 1 ? dispatch(decrementQty({id})): (qty = 0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          <span>{qty}</span>
          <AiOutlinePlus onClick={()=>qty >= 1 ? dispatch(incrementQty({id})): (qty = 0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
