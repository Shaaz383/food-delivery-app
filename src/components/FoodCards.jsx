import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";

const FoodCards = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
        <img
          src={img}
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500"
        />

        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500">₹ {price}</span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 50)}</p>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <AiFillStar className="text-yellow-400" /> {rating}
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
            className="p-2 font-bold rounded-lg bg-green-500 hover:bg-green-600  text-white text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCards;
