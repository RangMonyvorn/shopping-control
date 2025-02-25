import React , {useState} from 'react'

function carts({item , addtocart}) {



const {id, name, price, image} = item;

  return (
    <>
       <div className="carts">
        <div className="image">
        <img src={image} alt="" />
        </div>

        <div className="details">
          <p>{name}</p>
          <p>{price}  USD</p>
          <button onClick={() => addtocart(item)}>Add to carts </button>
        </div>
       </div>
    </>
  );
}

export default carts;