
import Slider from './Slider'

export const Deals = () => {
  return (
    <>
    <div className='bg-[#1ABA1A] flex justify-between px-[20px] py-[10px] items-center rounded-xl'>
        <p className='text-[#fff] m-0'>Deals of the day</p>
        <p className='text-[#fff] m-0'>View All</p>
    </div>
    <div className='flex gap-[80px] bg-white rounded-xl p-[20px]'>
        <Slider />
        <div>
            <p>Xioma Redmi Note 11 Pro 256GB 2023, Black
            Smartphone</p>
            <p className='flex gap-[10px] text-[#F1352B]'>$569.00 <p className='line-through mt-[3px] text-[12px] text-[#666666]'>$759.00</p></p>
            <ul className='list-disc'>
                <li> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li>  DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                <li>  Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>
            <div className='flex gap-[30px]'>
                <div className='bg-green-300 rounded-xl px-[20px] py-[10px]'>
                    <p className='text-[#1ABA1A] m-0'>FREE SHIPPING</p>
                </div>
                <div className='bg-red-300 rounded-xl px-[20px] py-[10px]'>
                    <p className='text-[#F1352B] m-0'>FREE GIFT</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
