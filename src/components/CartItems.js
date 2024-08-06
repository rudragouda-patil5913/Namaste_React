import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const CartItems = () => {
  const items = useSelector((store) => store.cart.items);
  if (items.length === 0) {
    return <h1>Please Add items in Cart</h1>;
  }
  return (
    <div>
      <ItemCard items={items} />
    </div>
  );
};

export default CartItems;
