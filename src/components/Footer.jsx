import { FooterLinks } from "./FooterLinks";

const socialIcons = [
    {
        id: 0,
        image: '/icons/twitter.svg'
    },
    {
        id: 1,
        image: '/icons/youtube.svg'
    },
    {
        id: 2,
        image: '/icons/instagram.svg'
    },
    {
        id: 3,
        image: '/icons/pinterest.svg'
    },
    {
        id: 4,
        image: '/icons/facebook.svg'
    },
]

const categoryData = [
    {
        id: 0,
        link: '#',
        title: 'Laptops'
    },
    {
        id: 1,
        link: '#',
        title: 'PC & Computers'
    },
    {
        id: 2,
        link: '#',
        title: 'Cell phones'
    },
    {
        id: 3,
        link: '#',
        title: 'Tablets'
    },
    {
        id: 4,
        link: '#',
        title: 'Cameras'
    },
]

export const Footer = () => {
  return (
    <div className="px-[200px] flex gap-[80px] py-[80px]">
      <div>
        <p className="text-[18px] font-bold">Swoo - 1st NYC tech online market</p>
        <div>
          <p className="text-[14px] capitalize mt-[30px]">hotline 24/7</p>
          <p className="text-[30px] font-bold text-[#1ABA1A]">(+91) 78977 88977</p>
          <p className="text-[14px] capitalize mt-[30px]">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
          <p className="text-[14px] capitalize">contact@Swootechmart.com</p>
          <div className="flex gap-[15px] mt-[40px]">
          {
            socialIcons.map((i, ind) => (
                <div className="w-[35px] h-[35px] rounded-3xl bg-[#E1E3EB] flex items-center justify-center" key={ind}>
                    <img src={i.image} alt="" />
                </div>
            ))
          }
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[60px]">
            <FooterLinks title={'Top Categories'} data={categoryData} />
            <FooterLinks title={'Company'} data={categoryData} />
            <FooterLinks title={'Help Center'} data={categoryData} />
            <FooterLinks title={'Partner'} data={categoryData} />
        </div>
        <div className="mt-[60px]">
            <p className="text-[18px] font-bold flex gap-[5px] capitalize">subscribe & get <p className="text-[18px] font-bold text-[red]">10% off {" "}</p> for your first order</p>
            <div className="flex px-[20px] py-[5px] border-b justify-between mt-[30px]">
                <input type="text" className="max-w-[200px]" placeholder=" Enter your email address" />
                <p className="text-[#1ABA1A]">SUBSCRIBE</p>
            </div>
            <p className="mt-[10px] text-[#666666]">By subscribing, you are accepted our <a href="#" className="underline text-[#000]">policy</a></p>
        </div>
      </div>
    </div>
  );
};
