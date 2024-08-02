import { AppContainer } from "./AppContainer";
import { Banner } from "./Banner";
import { BrandsAndCategories } from "./BrandsAndCategories";
import { Deals } from "./Deals";

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

export const Home = () => {
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
    </>
  );
};
