import React, { useState } from "react";
import list from "./data.json";
import Carts from "./carts.jsx";
import Navbar from "./navbar";
import "../src/management.css";


function ManagementStore() {
  const [cart, setCart] = useState([]);



  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id);
      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id ? { ...product, qty: product.qty + 1 } : product
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };




  const increaseqty = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      )
    );
  };



  const decreaseqty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === id ? { ...product, qty: product.qty - 1 } : product
        )
        .filter((product) => product.qty > 0)
    );
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.qty, 0);
  };



  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.qty, 0);
  };


  return (
    <>
      
      <Navbar cart={cart} cartcount={calculateTotalQuantity()} decreaseqty={decreaseqty} increaseqty={increaseqty}  calculateTotalPrice={calculateTotalPrice()} />

      <section>
        {list.map((item) => (
          <Carts key={item.id} item={item} addtocart={addToCart}  />
        ))}
      </section>
    </>
  );
}

export default ManagementStore;
