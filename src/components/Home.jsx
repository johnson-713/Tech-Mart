import { useState } from "react";
import { AppContainer } from "./AppContainer";
import { Banner } from "./Banner";
import { BrandsAndCategories } from "./BrandsAndCategories";
import { Card } from "./Card";
import { Deals } from "./Deals";
import { useNavigate } from "react-router-dom";

const brandsData = [
  {
    img: "/icons/jawk.svg",
  },
  {
    img: "/icons/digitek.svg",
  },

  {
    img: "/icons/tek.svg",
  },
  {
    img: "/icons/grafbase.svg",
  },

  {
    img: "/icons/msi.svg",
  },
  {
    img: "/icons/bear.svg",
  },
  {
    img: "/icons/oak.svg",
  },
  {
    img: "/icons/snyk.svg",
  },
  {
    img: "/icons/sonex.svg",
  },
  {
    img: "/icons/stropi.svg",
  },
];

const categoriesData = [
  {
    img: "/icons/laptop.svg",
    text: "Laptops",
  },
  {
    img: "/icons/cpu.svg",
    text: "PC Gaming",
  },
  {
    img: "/icons/headphones.svg",
    text: "Headphones",
  },
  {
    img: "/icons/pc.svg",
    text: "Monitors",
  },
];

const cardData = [
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "best",
    id: 12,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    actualPrice: "$359.00",
    discountedPrice: "$200.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "best",
    id: 11,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    priceRange: "$359.00 - $678.99",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "best",
    id: 10,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
    category: "best",
    id: 9,
  },
  {
    img: "/images/card1.png",
    title: "Samsung s24",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "new",
    id: 8,
  },
  {
    img: "/images/card1.png",
    title: "Samsung s24",
    quantity: "(152)",
    actualPrice: "$359.00",
    discountedPrice: "$200.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "new",
    id: 7,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    priceRange: "$359.00 - $678.99",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "new",
    id: 6,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
    category: "new",
    id: 5,
  },
  {
    img: "/images/card1.png",
    title: "Iphone 15",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "popular",
    id: 4,
  },
  {
    img: "/images/card1.png",
    title: "Iphone 15",
    quantity: "(152)",
    actualPrice: "$359.00",
    discountedPrice: "$200.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "popular",
    id: 3,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    priceRange: "$359.00 - $678.99",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category: "popular",
    id: 2,
  },
  {
    img: "/images/card1.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
    category: "popular",
    id: 1,
  },
];

export const Home = () => {
  const [filter, setFilter] = useState("best");
  const navigate = useNavigate();

  const filterData = (category) => {
    return cardData.filter((item) => item.category === category);
  };

  const bestData = filterData("best");
  const newData = filterData("new");
  const popularData = filterData("popular");


  return (
    <>
      <Banner />
      <AppContainer className="flex gap-[16px]">
        <BrandsAndCategories data={brandsData} title={"Feature Brands"} />
        <BrandsAndCategories data={categoriesData} title={"Top Categories"} />
      </AppContainer>
      <AppContainer>
        <Deals />
      </AppContainer>
      <AppContainer className="flex justify-center">
        <div className="py-[34px] flex gap-[10px] items-center">
          <img src="/icons/star.svg" alt="" />
          <p className="text-[#fff] flex gap-[5px]">
            Member get <p className="text-[#FFE400]">Free Shipping</p> with no
            order minimum!. *Restriction apply
          </p>
        </div>
      </AppContainer>
      <AppContainer className=" bg-[#fff] rounded-3xl px-[40px] py-[20px]">
        <div className="flex gap-[20px]">
          <p
            className={`${filter == "best" ? "font-bold underline" : ""}`}
            onClick={() => setFilter("best")}
          >
            Best Seller
          </p>
          <p
            className={`${filter == "new" ? "font-bold underline" : ""}`}
            onClick={() => setFilter("new")}
          >
            New IN
          </p>
          <p
            className={`${filter == "popular" ? "font-bold underline" : ""}`}
            onClick={() => setFilter("popular")}
          >
            Popular
          </p>
        </div>
        <div className="flex gap-[20px]">
          {(filter === "best"
            ? bestData
            : filter === "new"
            ? newData
            : popularData
          ).map((i, ind) => (
            <Card
              key={ind}
              img={i.img}
              originalPrice={i.originalPrice}
              title={i.title}
              quantity={i.quantity}
              isFreeGift={i.isFreeGift}
              isFreeShipping={i.isFreeShipping}
              isInStock={i.isInStock}
              priceRange={i.priceRange}
              actualPrice={i.actualPrice}
              discountedPrice={i.discountedPrice}
              handleclick={() => navigate(`/product/${i.id}`)}
            />
          ))}
        </div>
      </AppContainer>
    </>
  );
};
