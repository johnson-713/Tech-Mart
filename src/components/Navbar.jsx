

export const Navbar = () => {
  return (
    <div className="px-[30px] py-[15px]">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[30px]">
                <div className="bg-[#EBEEF6] rounded-[6px] py-[5px] pl-[22px] pr-[10px]">
                    <p className="text-[12px]">Hotline 24/7</p>
                </div>
                <p className="text-[12px] font-bold">(+91) 78977 88977</p>
            </div>
            <div className="flex gap-[20px]">
                <p className="text-[14px]">Sell on Swoo</p>
                <p className="text-[14px]">Order Tracking</p>
                <select className="bg-[white]">
                    <option>USD</option>
                </select>
                <select className="bg-[white]">
                    <option>Eng</option>
                </select>
            </div>
        </div>
        <div className="flex items-center justify-between mt-[28px]">
            <div className="flex items-center gap-[80px]">
                <img src="/icons/logo.svg" alt="logo" />
                <div className="flex gap-[40px]">
                <p>Home</p>
                <p>Products</p>
                <p>Contact</p>
                </div>
            </div> 
            <div className="flex gap-[30px] items-center">
                <div className="w-[40px] h-[40px] rounded-3xl p-[10px] bg-[#EBEEF6] flex items-center justify-center">
                    <img src="/icons/Vector.svg" alt="" />
                </div>
                <div className="w-[40px] h-[40px] rounded-3xl p-[10px] bg-[#EBEEF6] flex items-center justify-center">
                    <img width={25} src="/icons/user.svg" alt="" />
                </div>
                <div>
                    <p className="text-[#666666] text-[11px]">WELCOME</p>
                    <a href="/login" className="font-bold">LOG IN/REGISTER</a>
                </div>
                <div className="flex gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-3xl p-[10px] bg-[#EBEEF6] flex items-center justify-center">
                    <img src="/icons/Symbol.svg" alt="" />
                </div>
                <div>
                    <p className="text-[#666666] text-[11px]">CART</p>
                    <p className="font-bold">$ 6767</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
