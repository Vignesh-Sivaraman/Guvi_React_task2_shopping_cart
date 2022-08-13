import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Nav from "./Nav";
import Card from "./Card";
import CartItems from "./CartItems";
import { useState } from "react";

function App() {
  let productData = [
    {
      id: 1,
      title: "Mercury",
      price: 10000,
      currency: "₹",
      image:
        "https://us.123rf.com/450wm/archangel80889/archangel808891911/archangel80889191100711/135858939-planet-mercury-on-a-black-background-.jpg?ver=6",
    },
    {
      id: 2,
      title: "Venus",
      price: 20000,
      currency: "₹",
      image:
        "https://us.123rf.com/450wm/guardiano007/guardiano0071703/guardiano007170300032/75244834-highly-detailed-venus-planet-on-black-elements-of-this-image-furnished-by-nasa.jpg?ver=6",
    },
    {
      id: 3,
      title: "Earth",
      price: 30000,
      currency: "₹",
      image:
        "https://us.123rf.com/450wm/larichev89/larichev891904/larichev89190400049/121873809-view-of-blue-planet-earth-in-space-3d-rendering-elements-of-this-image-furnished-by-nasa.jpg?ver=6",
    },
    {
      id: 4,
      title: "Mars",
      price: 40000,
      currency: "₹",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    },
    {
      id: 5,
      title: "Jupiter",
      price: 50000,
      currency: "₹",
      image:
        "https://us.123rf.com/450wm/elenaphotos21/elenaphotos211212/elenaphotos21121200034/16801296-jupiter-planet-in-the-universe-surrounded-with-plenty-of-stars.jpg?ver=6",
    },
    {
      id: 6,
      title: "Saturn",
      price: 60000,
      currency: "₹",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSPSXhNWYteDEFnIPbnb0MCRgh81xBaUTuw&usqp=CAU",
    },
    {
      id: 7,
      title: "Uranus",
      price: 70000,
      currency: "₹",
      image: "https://stsci-opo.org/STScI-01EVT8T3KTG0YDT1C92FD9QC8R.jpg",
    },
    {
      id: 8,
      title: "Neptune",
      price: 80000,
      currency: "₹",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/640px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return (
    <div>
      <Nav></Nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop for your Planet!!!!</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              orbit your favourite star now.......
            </p>
          </div>
        </div>
      </header>
      <div className="container page">
        <div className="row">
          <div className="col-7 col-lg-8">
            <div className="container product">
              <div className="row">
                {productData.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      product={product}
                      handleAddToCart={addToCart}
                      cartItems={cart}
                    ></Card>
                  );
                })}
              </div>
            </div>
          </div>
          {cart.length === 0 ? (
            <div className="col-5 col-lg-4 empty-cart">
              No Planets in cart!!!
            </div>
          ) : (
            <div className="col-5 col-lg-4">
              {cart.map((cartItem) => {
                return (
                  <CartItems
                    key={cartItem.id}
                    cartItem={cartItem}
                    removeFromCart={removeFromCart}
                  ></CartItems>
                );
              })}
              <h1 className="total">{`Total -${productData[0].currency}${total}`}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
