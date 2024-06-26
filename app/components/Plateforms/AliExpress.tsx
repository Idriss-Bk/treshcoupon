"use client";
import React, { useState } from "react";
import { BsInfoSquare } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoStar } from "react-icons/io5";
import { RiScissorsCutFill } from "react-icons/ri";
import { SiAliexpress } from "react-icons/si";
import ProgressBar from "../ProgressBar";
import ProgressBrr from "../UIUX/ProgressBrr";

const PF_AliExpress = () => {
    const [showModal, setShowModal] = useState(false);
    const [validationFB, setvalidationFB] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };

    const handleProgressComplete = () => {
        setShowModal(false);
        setvalidationFB(true);
      };

  return (
    <>
      <div className="mb-16 px-5 md:px-0">
        <div className="lg:flex gap-8">
          <div className="lg:w-5/12">
            <div className="bg-[#E43225] h-[210px] rounded-xl flex justify-center items-center">
              <SiAliexpress className="text-white text-9xl" />
            </div>
          </div>
          <div className="lg:w-7/12">
            <h1 className="text-3xl text-zinc-900 font-bold mb-3 capitalize">
              AliExpress promo codes & discounts
            </h1>
            <p className="text-sm text-zinc-700 mb-4">
              Today&#34;s best AliExpress coupons for June 23, 2024. Join the
              TreshrCoupon community and earn cash back at aliexpress.us and
              more. Earn rewards for sharing AliExpress discount codes and
              helping other shoppers save.
            </p>
            <div className="text-sm text-zinc-800 mb-4 font-semibold">
              <span className="inline-block text-black mr-2">
                <IoStar className="inline-block text-black relative -top-[2px]" />{" "}
                4,3
              </span>
              <span className="inline-block text-black mr-2 underline">
                10 Ratings
              </span>
              <span className="inline-block text-black mr-2 underline">
                Discounts from <strong>5% off</strong> to{" "}
                <strong>35% off</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-slate-200 mt-8 mb-8"></div>
        <div className="py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="">
                <div className="mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col">
                  <SiAliexpress className="text-[#E43225] text-6xl relative -top-[15px]" />
                  <span className="text-sm text-black font-bold text-center -mt-[39px]">
                    $25 OFF
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <h3 className="text-xl font-semibold text-black mb-1.5 mt-2.5">
                  Extra $25 Off Orders $179+ with Coupon
                </h3>
                <div className="text-sm text-zinc-800 mb-4 font-semibold">
                  <span className="inline-block text-green-700 mr-2 text-xs">
                    <IoCheckmarkDoneOutline className="inline-block text-green-700 text-lg relative -top-[2px]" />{" "}
                    Verified 10 hours ago
                  </span>
                  <span className="inline-block text-slate-500 mr-2 text-xs">
                    <BsInfoSquare className="inline-block text-slate-500 text-md relative -top-[1px]" />{" "}
                    21 Used Today
                  </span>
                </div>
              </div>
            </div>
            <div className="">
            <button onClick={handleShowModal} className="py-2.5 px-4 rounded-full bg-[#E43225] text-white font-semibold">
                <RiScissorsCutFill className="inline-block text-white text-lg relative -top-[0.5px] mr-[2px]" />{" "}
                Obtenir le code promo
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="">
                <div className="mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col">
                  <SiAliexpress className="text-[#E43225] text-6xl relative -top-[15px]" />
                  <span className="text-sm text-black font-bold text-center -mt-[39px]">
                    20% OFF
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <h3 className="text-xl font-semibold text-black mb-1.5 mt-2.5">
                  Get 20% Off Your $40 Order with Coupon
                </h3>
                <div className="text-sm text-zinc-800 mb-4 font-semibold">
                  <span className="inline-block text-green-700 mr-2 text-xs">
                    <IoCheckmarkDoneOutline className="inline-block text-green-700 text-lg relative -top-[2px]" />{" "}
                    Verified 10 hours ago
                  </span>
                  <span className="inline-block text-slate-500 mr-2 text-xs">
                    <BsInfoSquare className="inline-block text-slate-500 text-md relative -top-[1px]" />{" "}
                    21 Used Today
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="py-2.5 px-4 rounded-full bg-[#E43225] text-white font-semibold">
                <RiScissorsCutFill className="inline-block text-white text-lg relative -top-[0.5px] mr-[2px]" />{" "}
                Get Coupon Code
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="">
                <div className="mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col">
                  <SiAliexpress className="text-[#E43225] text-6xl relative -top-[15px]" />
                  <span className="text-sm text-black font-bold text-center -mt-[39px]">
                    60% OFF
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <h3 className="text-xl font-semibold text-black mb-1.5 mt-2.5">
                  Up to 60% Off Orders $150 with Coupon
                </h3>
                <div className="text-sm text-zinc-800 mb-4 font-semibold">
                  <span className="inline-block text-green-700 mr-2 text-xs">
                    <IoCheckmarkDoneOutline className="inline-block text-green-700 text-lg relative -top-[2px]" />{" "}
                    Verified 10 hours ago
                  </span>
                  <span className="inline-block text-slate-500 mr-2 text-xs">
                    <BsInfoSquare className="inline-block text-slate-500 text-md relative -top-[1px]" />{" "}
                    21 Used Today
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="py-2.5 px-4 rounded-full bg-[#E43225] text-white font-semibold">
                <RiScissorsCutFill className="inline-block text-white text-lg relative -top-[0.5px] mr-[2px]" />{" "}
                Get Coupon Code
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 w-full shadow-md rounded-lg border-2 mb-5 border-slate-200">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="">
                <div className="mask mask-hexagon h-[100px] w-[100px] bg-slate-200 flex justify-center items-center flex-col">
                  <SiAliexpress className="text-[#E43225] text-6xl relative -top-[15px]" />
                  <span className="text-sm text-black font-bold text-center -mt-[39px]">
                    30% OFF
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <h3 className="text-xl font-semibold text-black mb-1.5 mt-2.5">
                  Save 30% on Your $20 Order with Promo Code
                </h3>
                <div className="text-sm text-zinc-800 mb-4 font-semibold">
                  <span className="inline-block text-green-700 mr-2 text-xs">
                    <IoCheckmarkDoneOutline className="inline-block text-green-700 text-lg relative -top-[2px]" />{" "}
                    Verified 10 hours ago
                  </span>
                  <span className="inline-block text-slate-500 mr-2 text-xs">
                    <BsInfoSquare className="inline-block text-slate-500 text-md relative -top-[1px]" />{" "}
                    21 Used Today
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="py-2.5 px-4 rounded-full bg-[#E43225] text-white font-semibold">
                <RiScissorsCutFill className="inline-block text-white text-lg relative -top-[0.5px] mr-[2px]" />{" "}
                Get Coupon Code
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="h-full w-full bg-black bg-opacity-95 fixed top-0 left-0 px-5 md:px-0 flex justify-center items-center">
            <div className="bg-zinc-100 rounded-lg py-4 px-8">
                <div className="flex justify-center items-center -mt-3 -mb-3">
                <SiAliexpress className="text-[#E43225] text-8xl relative" />
                </div>
                <h3 className="text-zinc-800 font-semibold capitalize text-xl mb-0.5">Discount on your next payment with AliExpress</h3>
                <div className="text-center text-xs text-zinc-400 border-b-[1px] border-slate-200 pb-4 mb-5 uppercase font-semibold">1 day ago - 29 used today</div>
                <div className="flex justify-center items-center mb-8">
                    <div className="bg-slate-300 text-xl font-bold py-3 w-[180px] rounded-full flex justify-center items-center text-zinc-700">KG*****</div>
                </div>
                <ProgressBrr onComplete={handleProgressComplete} />
            </div>
        </div>
      )}
      {validationFB && (
        <>
            <div className="h-full w-full bg-black bg-opacity-95 fixed top-0 left-0 px-5 md:px-0 flex justify-center items-center">
                <div className="bg-zinc-100 rounded-lg py-4 px-8">
                    <div className="flex justify-center items-center -mt-3 -mb-3">
                        <SiAliexpress className="text-[#E43225] text-8xl relative" />
                    </div>
                    <h3 className="text-zinc-800 font-semibold capitalize text-xl mb-3"><span className="text-green-600">Congratulations!</span> Your coupon code has been generated</h3>
                    <div className="flex justify-center items-center">
                        <div className="text-center max-w-[600px] text-sm text-zinc-900 border-b-[1px] border-slate-200 pb-4 mb-7 font-semibold">You are only left with one step and that is human verification. Please click on the button below and choose one of the offers and complete it to access your coupon code</div>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <button className="py-4 px-8 rounded-lg bg-[#E43225] text-white font-semibold">Get Your Coupon Code Now</button>
                    </div>
                </div>
            </div>
        </>
      )}
    </>
  );
};

export default PF_AliExpress;
