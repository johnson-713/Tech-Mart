

// eslint-disable-next-line react/prop-types
export const FooterLinks = ({ title, data }) => {
  return (
    <div>
      <p className="text-[18px] font-bold whitespace-nowrap mb-[30px]">{title}</p>
      <div className="flex flex-col gap-[10px]">
      {
      // eslint-disable-next-line react/prop-types
      data.map((i, ind) => (
        <a key={ind} href={i.link}>
          {i.title}
        </a>
      ))}
      </div>
    </div>
  );
};
