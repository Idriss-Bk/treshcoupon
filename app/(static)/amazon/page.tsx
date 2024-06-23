import React from 'react'
import { BsInfoSquare } from 'react-icons/bs'
import { FaAmazon } from 'react-icons/fa'
import { IoCheckmarkDoneOutline, IoStar } from 'react-icons/io5'
import { RiScissorsCutFill } from 'react-icons/ri'
import { SiAliexpress } from 'react-icons/si'

const Amazon = () => {
  return (
    <div className='mb-16 px-5 md:px-0'>
        <div className="lg:flex gap-8">
        <div className="lg:w-5/12">
          <div className='bg-[#ff9900] h-[210px] rounded-xl flex justify-center items-center'>
            <FaAmazon className="text-black text-8xl" />
          </div>
        </div>
        <div className="lg:w-7/12">
            <h1 className='text-3xl text-zinc-900 font-bold mb-3 capitalize'>Amazon promo codes & discounts</h1>
            <p className='text-sm text-zinc-700 mb-4'>Today's best Amazon coupons for June 23, 2024. Join the TreshrCoupon community and earn cash back at amazon.com and more. Earn rewards for sharing Amazon discount codes and helping other shoppers save.</p>
            <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                <span className='inline-block text-black mr-2'><IoStar className='inline-block text-black relative -top-[2px]' /> 3,9</span>
                <span className='inline-block text-black mr-2 underline'>8 Ratings</span>
                <span className='inline-block text-black mr-2 underline'>Discounts from <strong>5% off</strong> to <strong>20% off</strong></span>
            </div>
        </div>
      </div>
      <div className='border-b-[1px] border-slate-200 mt-8 mb-8'></div>
        <div className='py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                        <div className='mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col'>
                            <FaAmazon className="text-[#ff9900] text-4xl relative" />
                            <span className='text-sm text-black font-bold text-center'>50% OFF</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-col'>
                    <h3 className='text-xl font-semibold text-black mb-1.5 mt-2.5'>Save $18 on Orders $129+ with USAFF18 Code</h3>
                    <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                        <span className='inline-block text-green-700 mr-2 text-xs'><IoCheckmarkDoneOutline className='inline-block text-green-700 text-lg relative -top-[2px]' /> Verified 10 hours ago</span>
                        <span className='inline-block text-slate-500 mr-2 text-xs'><BsInfoSquare className='inline-block text-slate-500 text-md relative -top-[1px]' /> 21 Used Today</span>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <button className='py-2.5 px-4 rounded-full bg-[#ff9900] text-white font-semibold'><RiScissorsCutFill className='inline-block text-white text-lg relative -top-[0.5px] mr-[2px]' /> Get Coupon Code</button>
                </div>
            </div>
        </div>
        <div className='py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                        <div className='mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col'>
                            <FaAmazon className="text-[#ff9900] text-4xl relative" />
                            <span className='text-sm text-black font-bold text-center'>50% OFF</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-col'>
                    <h3 className='text-xl font-semibold text-black mb-1.5 mt-2.5'>Extra $25 Off Orders $179+ with Coupon</h3>
                    <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                        <span className='inline-block text-green-700 mr-2 text-xs'><IoCheckmarkDoneOutline className='inline-block text-green-700 text-lg relative -top-[2px]' /> Verified 10 hours ago</span>
                        <span className='inline-block text-slate-500 mr-2 text-xs'><BsInfoSquare className='inline-block text-slate-500 text-md relative -top-[1px]' /> 21 Used Today</span>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <button className='py-2.5 px-4 rounded-full bg-[#ff9900] text-white font-semibold'><RiScissorsCutFill className='inline-block text-white text-lg relative -top-[0.5px] mr-[2px]' /> Get Coupon Code</button>
                </div>
            </div>
        </div>
        <div className='py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                    <div className='mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col'>
                            <FaAmazon className="text-[#ff9900] text-4xl relative" />
                            <span className='text-sm text-black font-bold text-center'>50% OFF</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-col'>
                    <h3 className='text-xl font-semibold text-black mb-1.5 mt-2.5'>Get 20% Off Your $40 Order with Coupon</h3>
                    <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                        <span className='inline-block text-green-700 mr-2 text-xs'><IoCheckmarkDoneOutline className='inline-block text-green-700 text-lg relative -top-[2px]' /> Verified 10 hours ago</span>
                        <span className='inline-block text-slate-500 mr-2 text-xs'><BsInfoSquare className='inline-block text-slate-500 text-md relative -top-[1px]' /> 21 Used Today</span>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <button className='py-2.5 px-4 rounded-full bg-[#ff9900] text-white font-semibold'><RiScissorsCutFill className='inline-block text-white text-lg relative -top-[0.5px] mr-[2px]' /> Get Coupon Code</button>
                </div>
            </div>
        </div>
        <div className='py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                    <div className='mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col'>
                            <FaAmazon className="text-[#ff9900] text-4xl relative" />
                            <span className='text-sm text-black font-bold text-center'>50% OFF</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-col'>
                    <h3 className='text-xl font-semibold text-black mb-1.5 mt-2.5'>Up to 60% Off Orders $150 with Coupon</h3>
                    <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                        <span className='inline-block text-green-700 mr-2 text-xs'><IoCheckmarkDoneOutline className='inline-block text-green-700 text-lg relative -top-[2px]' /> Verified 10 hours ago</span>
                        <span className='inline-block text-slate-500 mr-2 text-xs'><BsInfoSquare className='inline-block text-slate-500 text-md relative -top-[1px]' /> 21 Used Today</span>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <button className='py-2.5 px-4 rounded-full bg-[#ff9900] text-white font-semibold'><RiScissorsCutFill className='inline-block text-white text-lg relative -top-[0.5px] mr-[2px]' /> Get Coupon Code</button>
                </div>
            </div>
        </div>
        <div className='py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''>
                    <div className='mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col'>
                            <FaAmazon className="text-[#ff9900] text-4xl relative" />
                            <span className='text-sm text-black font-bold text-center'>50% OFF</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-start flex-col'>
                    <h3 className='text-xl font-semibold text-black mb-1.5 mt-2.5'>Save 30% on Your $20 Order with Promo Code</h3>
                    <div className='text-sm text-zinc-800 mb-4 font-semibold'>
                        <span className='inline-block text-green-700 mr-2 text-xs'><IoCheckmarkDoneOutline className='inline-block text-green-700 text-lg relative -top-[2px]' /> Verified 10 hours ago</span>
                        <span className='inline-block text-slate-500 mr-2 text-xs'><BsInfoSquare className='inline-block text-slate-500 text-md relative -top-[1px]' /> 21 Used Today</span>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <button className='py-2.5 px-4 rounded-full bg-[#ff9900] text-white font-semibold'><RiScissorsCutFill className='inline-block text-white text-lg relative -top-[0.5px] mr-[2px]' /> Get Coupon Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Amazon