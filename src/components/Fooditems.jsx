import React from "react";
import FoodCards from "./FoodCards";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


const Fooditems = () => {
  const category = useSelector((state) => state.category.category);
  const  search = useSelector((state) => state.search.search);

  const handleToast = (name) => { // Define handleToast here
    toast.success(`${name} added to cart!`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-6 justify-center lg:justify-start mx-6 my-10">
        {
          FoodData.filter((food)=>{
            if(category === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase())
            }
            else{
             return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map((food)=>{
            return (
            <FoodCards
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast} // Pass handleToast as prop
            />
          );
          })
        }
      </div>
    </>
  );
};

export default Fooditems;
