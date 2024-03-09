import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  
  const [activeCart, setActiveCart] = useState(false);

  const cartItms = useSelector((state) => state.cart.cart);
  console.log(cartItms);
  const totalQuantity = cartItms.reduce((totalQty,item)=>totalQty + item.qty, 0);
  const totalPrice = cartItms.reduce((totalPrice,item)=>totalPrice + item.qty * item.price, 0);
  let navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-4 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-600">My order</span>
          <MdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

          {
            cartItms.length > 0 ? cartItms.map((food)=>{
              return (
                <CartItems 
                  key={food.id}
                  id = {food.id}
                  name = {food.name}
                  price = {food.price}
                  img = {food.img}
                  qty = {food.qty}

                />
              )
            })  : <h2 className="text-center text-xl font-bold text-gray-600">Your cart is empty</h2>
          }


        <div className="fixed bottom-0">
          <h3 className="font-bold text-gray-800">Items : {totalQuantity}</h3>
          <h3 className="font-bold text-gray-800">Total Amount : {totalPrice} </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-5" />
          <button
          onClick={()=>navigate('/success')}
           className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
            Checkout{" "}
          </button>
        </div>
      </div>

      
      
      <FaShoppingCart 
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl fixed bottom-4 right-12 p-4 ${totalQuantity > 0 && "animate-bounce delay-500 transition-all  "}`}
      />
     
    </>
  );
};

export default Cart;
