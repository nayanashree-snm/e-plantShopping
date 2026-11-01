import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Discover beautiful plants for your home.</p>

          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>Price: ₹{item.price}</p>

                  <p>
                    Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1
                        }))
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1
                        }))
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>

          <div className="cart-summary">
            <h2>Total Amount: ₹{totalAmount}</h2>

            <div className="cart-actions">

              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>

              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon!")}
              >
                Checkout
              </button>

            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default CartItem;