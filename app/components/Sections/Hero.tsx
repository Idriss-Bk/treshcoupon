import React from "react";
import FlipWords from "@/app/components/UIUX/flip-words";

const Hero = () => {
  const words = ["Amazon", "AliExpress", "SHEIN", "Adidas", "Nike"];
  const wordColors = [
    "text-[#ff9900]",
    "text-orange-600",
    "text-black",
    "text-black",
  ];

  return (
    <div className="mb-16">
      <div className="text-2xl md:text-3xl font-bold text-zinc-800 z-50">
        Get promo codes that actually work<FlipWords words={words} wordColors={wordColors} className="text-5xl md:text-7xl mt-2" />
      </div>
      <div className="text-sm md:text-base mb-5 mt-2 text-neutral-900 py-4">
        Save both time and money effortlessly by using our exclusive coupon codes, which boast a success rate three times higher than average, covering a vast network of over 400,000 online stores. Our meticulously curated collection ensures you always find a valid discount, making your online shopping experience not only more economical but also more convenient.
      </div>
      <div className="flex justify-start items-center gap-2">
        <button className="bg-zinc-700 font-semibold text-zinc-100 px-5 py-1.5 rounded flex items-center space-x-2">
          <span>Essayer Gratuit</span>
        </button>
        <button className="bg-[#7bbb292b] border-[#7bbb294d] border-[1px] font-semibold text-[#7bbb29] px-5 py-1.5 rounded flex items-center space-x-2">
          <span>4th Deals 90% OFF</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
