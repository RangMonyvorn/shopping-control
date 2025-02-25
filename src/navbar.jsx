import React, { useState } from "react";
import "../src/navbar.css";

function Navbar({ cart, cartcount, decreaseqty, increaseqty,calculateTotalPrice }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  

  return (
    <>
      <nav>
        <div className="nav_box">
          <span className="logo">My Shopping</span>
          <div className="carts-header" onClick={toggleCart} style={{ cursor: "pointer" }}>
            <span>🛒</span>
            <span>{cartcount}</span>
          </div>
        </div>
      </nav>



      {/* Show Cart Dropdown when clicked */}



      {showCart && (
        <div className="cart-dropdown">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.name}</h4>
                  <h4>{item.price}$</h4>

                  <div className="quanitity">
                 
                    <button onClick={() => decreaseqty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseqty(item.id)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
          )}


          <h3>TOTAL   : <span>$ {calculateTotalPrice} 💵 </span></h3>
          <div className="btns">
            <button className="close-cart" onClick={toggleCart}>
              Close Cart
            </button>
            <button>Payment 💵</button>
          </div>
        </div>
      )}


      
    </>
  );
}

export default Navbar;
