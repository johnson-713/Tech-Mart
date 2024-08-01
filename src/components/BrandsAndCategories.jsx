// eslint-disable-next-line react/prop-types
export const BrandsAndCategories = ({ title, data }) => {
  return (
    <div className="bg-white p-[30px] max-w-[665px] mb-[16px] rounded-xl">
      <div
        className={`flex items-center ${
          title == "Feature Brands" ? "justify-between" : "gap-[30px]"
        }`}
      >
        <p className="text-[18px] font-bold">{title}</p>
        <a className="text-[13px] text-[#666666]" href="#">
          View all
        </a>
      </div>
      <div
        className={`flex flex-wrap mt-[40px] ${
          title == "Feature Brands" ? "gap-[40px]" : "gap-[30px]"
        }`}
      >
        {
          // eslint-disable-next-line react/prop-types
          data.map((i, ind) => (
            <div key={ind} className="flex flex-col items-center gap-[10px]">
              <img src={i.img} alt="" />
              {
                i.text && <p>{i.text}</p>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};
