import React from "react";

function Cart() {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Keyboard"];
  return (
    <div>
      <h1>Cart 🛍 </h1>

      {items.length > 0 && <h3>You have {items.length} items in your cart </h3>}

      <ul>
        <h4>Products ⬇ </h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
