import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";

const FoodCards = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold md:w-[300px] w-[150px] bg-white p-2 flex flex-col rounded-lg gap-2 ">
        <img
          src={img}
          className="w-auto md:h-[130px] h-80px hover:scale-110 cursor-grab transition-all duration-500"
        />

        <div className="md:text-sm text-[10px] flex justify-between md:my-2 my-1">
          <h2>{name}</h2>
          <span className="text-green-500 md:text-[14px] text-[10px]">₹ {price}</span>
        </div>
        <p className="md:text-[12px] text-[8px] font-normal">{desc.slice(0,70)+ "...."}</p>
        <div className="flex justify-between items-center md:mt-4 mt-1">
          <span className="flex items-center gap-2 md:text-[14px] text-[8px]">
            <AiFillStar className="text-yellow-400"/> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id,
                  name,
                  price,
                  rating,
                  qty: 1,
                  img,
                })
              );
                handleToast(name)
            }}
            className="px-2 py-1   cursor-pointer rounded-lg border border-green-700 text-green-700 md:text-sm uppercase font-semibold text-[8px]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCards;
