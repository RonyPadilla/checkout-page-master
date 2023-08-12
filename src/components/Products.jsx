import "../style/products.css";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://github.com/RonyPadilla/checkout-page-master/blob/main/src/img/photo1.png?raw=true",
      name: "Vintage Backbag",
      finalPrice: 54.99,
      price: 94.99,
      amount: 1,
    },
    {
      id: 2,
      img: "https://github.com/RonyPadilla/checkout-page-master/blob/main/src/img/photo2.png?raw=true",
      name: "Levi Shoes",
      finalPrice: 74.99,
      price: 124.99,
      amount: 1,
    },
  ]);

  function increase(id) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
    });
    console.log(products);
  }

  function decrease(id) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          if (product.amount > 1) {
            return { ...product, amount: product.amount - 1 };
          }
        }
        return product;
      });
    });
    console.log(products);
  }

  return (
    <>
      <section className="products">
        <div className="products-div">
          {products.map((product) => (
          <div key={product.id} className="product-tag">
            <div>
              <img src={`${product.img}`} className="img-products" alt="img-products" />
            </div>
            <div className="data-products">
              <div className="data-products-info">
                <p>{product.name}</p>
                <div className="price-div">
                  <p className="final-price">${product.finalPrice}</p>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="div-amount">
                <AiOutlineMinus onClick={() => decrease(product.id)} />
                <p>{product.amount}</p>
                <BsPlus onClick={() => increase(product.id)} />
              </div>
            </div>
          </div>
        ))}
        <div className="purchase-data">
          <h2 className="text-data">Shipping</h2>
          <p className="price">$19</p>
        </div>
        <div className="purchase-data">
          <h2 className="text-data">Total</h2>
          <p className="price">$148.98</p>
        </div>
        </div>
        
      </section>
    </>
  );
};
