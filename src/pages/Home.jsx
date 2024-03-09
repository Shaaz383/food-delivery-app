import React from 'react';
import Navbar from '../components/Navbar';
import Categorymenu from '../components/Categorymenu';
import Fooditems from '../components/Fooditems';
import Cart from '../components/Cart'




const Home = () => {
  return (
    <>
      <div>
      <Navbar/>
      <Categorymenu/>
      <Fooditems/>
      <Cart/>
      </div>
    </>
  )
}

export default Home