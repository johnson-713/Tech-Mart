import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { AppContainer } from "./AppContainer";

export const Product = () => {
  const url = useLocation();
  const id = url.pathname.split("/")[2];
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [addToCart, setAddToCart] = useState({});
  const cartItem = localStorage.getItem("cartItem");

  console.log("cartItem", cartItem, productData);

  const data = [
    {
      id: "1",
      img: "/images/card1.png",
      title: "BOSO 2 Wireless On Ear Headphone",
      quantity: "(152)",
      originalPrice: "$359.00",
      isFreeShipping: true,
      isFreeGift: true,
      isInStock: false,
      category: "popular",
    },
  ];

  const handleDecreaseCart = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    navigate("/cart");
  };

  const handleAddToCart = () => {
    if (cartItem === null) {
      setAddToCart(productData);
      localStorage.setItem("cartItem", JSON.stringify(addToCart));
      localStorage.setItem("quantity", quantity);
    } else {
      navigate('/cart')
    }
  };

  useEffect(() => {
    const selectedData = data.find((product) => product.id === id);
    if (selectedData) {
      setProductData(selectedData);
    }
  }, [url]);

  return (
    <AppContainer className="flex gap-[20px] bg-[#fff]">
      <Slider />
      <div>
        <p>{productData.title}</p>
        <p>{productData.originalPrice}</p>
        <div className="flex">
          {productData.isFreeShipping ? (
            <div className="text-[#1ABA1A] text-[12px] py-[6px] px-[10px] bg-green-200 rounded-xl">
              Free Shipping
            </div>
          ) : (
            <div>$2.99 Shipping</div>
          )}
          {productData.isFreeGift && (
            <div className="text-[#F1352B] text-[12px] py-[6px] px-[10px] bg-red-200 rounded-xl">
              Free Gift
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#EDEFF6] p-[20px]">
        <p>Total Price</p>
        <p>{productData.originalPrice}</p>
        {productData.isInStock ? (
          <div className="flex gap-[5px]">
            <img src="/icons/green-tick.svg" alt="" />
            <p className="m-0">In stock</p>
          </div>
        ) : (
          <div className="flex gap-[5px]">
            <img src="/icons/delete.svg" alt="" />
            <p className="m-0">Out of stock</p>
          </div>
        )}
        <div className="bg-[#fff] flex justify-around rounded-xl items-center px-[20px] py-[10px]">
          <img
            className="cursor-pointer"
            src="/icons/minus.svg"
            alt=""
            onClick={() => handleDecreaseCart()}
          />
          <p className="m-0">{quantity}</p>
          <img
            className="cursor-pointer"
            src="/icons/plus.svg"
            alt=""
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
        <button
          onClick={() => handleAddToCart()}
          className="bg-[#1ABA1A] text-[#fff] px-[20px] py-[10px] rounded-xl"
        >
          {cartItem !== null ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          onClick={() => handleBuy()}
          className="bg-[#F6AB4A] px-[20px] py-[10px] rounded-xl"
        >
          Buy
        </button>
      </div>
    </AppContainer>
  );
};
