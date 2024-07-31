import { AppContainer } from "./AppContainer";

export const Banner = () => {
  return (
    <AppContainer className="flex">
      <div className="bg-[#fff] px-[50px] py-[15px]">
        <p className="text-red">SALE 40% OFF</p>
        <p>Latops</p>
        <p>PC & Computers</p>
        <p>Cell phones</p>
        <p>Tablets</p>
        <p>Gaming Consoles</p>
        <p>Networking</p>
        <p>Cameras</p>
      </div>
      <div className="flex">
        <div>
          <div className="relative">
            <img src="/images/slider1.png" alt="" />
            <div className="absolute top-[30px] left-[40px]">
              <p className="text-[30px] text-[#fff] font-bold">
                Noise Cancelling
              </p>
              <p className="text-[30px] text-[#fff]">Headphone</p>
              <p className="text-[12px] text-[#fff] mt-[19px] ml-[10px]">
                Boso Over-Ear Headphone
              </p>
              <p className="text-[12px] text-[#fff] ml-[10px]">
                Wifi, Voice Assistant,
              </p>
              <p className="text-[12px] text-[#fff] ml-[10px]">
                Low latency game mode
              </p>
              <button className="bg-white mt-[40px] py-[7px] px-[15px] rounded-lg">
                BUY NOW
              </button>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src="/images/slider2.png" alt="" />
              <div className="absolute top-[20px] left-[20px]">
                <p className="text-[15px]">Sony playgo 5</p>
                <p className="text-[15px] whitespace-nowrap flex gap-[10px] mb-[15px]">
                  from <p className="text-[#1ABA1A]">$569</p>
                </p>
                <a href="#" className="underline">
                  DISCOVER NOW
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/slider3.png" alt="" />
              <div className="absolute top-[20px] left-[20px]">
                <p className="text-[15px] text-[#fff]">Logitek Bluetooth</p>
                <p className="text-[15px] text-[#FFC107] mb-[15px]">keyboard</p>
                <p className="text-[#fff] text-[15px]">Best for all devices</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src="/images/slider4.png" alt="" />
            <div className="absolute top-[20px] right-[20px]">
              <p className="text-[15px]">XOMIA</p>
              <p className="text-[16px] w-[80px] mb-[15px]">Sport Water Resistance Watch</p>
              <button className="bg-[#333333] text-[#fff] rounded-lg px-[16px] py-[8px]">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
