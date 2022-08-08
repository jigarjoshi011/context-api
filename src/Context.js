import { createContext, useContext, useState } from "react";
import faker from "@faker-js/faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map(()=>({

    id: faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.fashion(),


  }));

  const [products] = useState(productsArray);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;




// import React, { useState } from 'react'
// import { faker } from '@faker-js/faker';
// import SingleProduct from './SingleProduct';

// const Home = () => {

//   const productArray=[...Array(20)].map(()=>({

//     userId: faker.datatype.uuid(),
//     name:faker.commerce.productName(),
//     price:faker.commerce.price(),
//     image:faker.image.fashion(),


//   }));
//   console.log(productArray);