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
          <div>
            {products.map((product) => (
              <div key={product.id} className="product-tag">
                <div className="div-img">
                  <img
                    src={`${product.img}`}
                    className="img-products"
                    alt="img-products"
                  />
                </div>
                <div className="data-products">
                  <div className="data-products-info">
                    <p className="product-name">{product.name}</p>
                    <div className="price-div">
                      <p className="final-price">${product.finalPrice}</p>
                      <p className="price-no-offer">${product.price}</p>
                    </div>
                  </div>
                  <div className="div-amount">
                    <div
                      className="icon-div"
                      onClick={() => decrease(product.id)}
                    >
                      <AiOutlineMinus className="icon" />
                    </div>

                    <p>{product.amount}</p>

                    <div
                      className="icon-div"
                      onClick={() => increase(product.id)}
                    >
                      <BsPlus className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="total-price-div">
            <div className="purchase-data">
              <h3 className="text-data">Shipping</h3>
              <p className="price">$19</p>
            </div>
            <div className="purchase-data">
              <h3 className="text-data">Total</h3>
              <p className="price">$148.98</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
