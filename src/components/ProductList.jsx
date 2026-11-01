import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"},
      { id: 2, name: "Peace Lily", price: 399, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"},
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Rubber Plant", price: 449, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Boston Fern", price: 349, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      { id: 7, name: "Lavender", price: 299, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Rosemary", price: 249, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Mint", price: 149, image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "Basil", price: 199, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Lemon Balm", price: 229, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "Thyme", price: 179, image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    category: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 599, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Jade Plant", price: 249, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 16, name: "Pothos", price: 199, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
      { id: 17, name: "Calathea", price: 449, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" },
      { id: 18, name: "Philodendron", price: 499, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <header className="product-heading">
        <h1>Our Beautiful Plants</h1>
        <p>Bring home a little piece of nature.</p>
      </header>

      {plantCategories.map((category) => (
        <section className="category-section" key={category.category}>

          <h2>{category.category}</h2>

          <div className="product-grid">

            {category.plants.map((plant) => {

              const alreadyAdded = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <div className="product-card" key={plant.id}>

                <img
                    src={plant.image}
                    alt={plant.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";
                    }}
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="price">
                      ₹{plant.price}
                    </p>

                    <button
                      className="add-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={alreadyAdded}
                    >
                      {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>

                </div>
              );
            })}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;