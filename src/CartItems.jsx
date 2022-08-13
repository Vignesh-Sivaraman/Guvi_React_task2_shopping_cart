import React from "react";

function CartItems({ cartItem, removeFromCart }) {
  return (
    <ol className="list-group list-group-numbered my-3">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{cartItem.title}</div>
          {`${cartItem.currency} ${cartItem.price}`}
        </div>
        <button
          onClick={() => {
            removeFromCart(cartItem);
          }}
          className="badge bg-primary rounded-pill"
        >
          X
        </button>
      </li>
    </ol>
  );
}

export default CartItems;
