import Link from "next/link";
import React from "react";
import { BiLogoTiktok } from "react-icons/bi";
import { BsSnapchat } from "react-icons/bs";
import { CgAdidas } from "react-icons/cg";
import { FaAmazon, FaEtsy, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { SiAliexpress, SiInstacart, SiNike, SiUbereats } from "react-icons/si";

const Services = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl text-zinc-800 md:text-3xl mb-2 font-bold">
        Today&#34;s Trending Coupons
      </h3>
      <p className="text-sm font-normal text-zinc-900">
        {" "}
        Notre service vous permet de pirater ou d&rsquo;espionner gratuitement
        des comptes de médias sociaux tels que Facebook, Snapchat, Instagram,
        WhatsApp, etc. Sélectionnez simplement la plateforme ci-dessous et
        suivez les étapes ci-dessous:
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-5 mt-7">
        <div>
          <Link href="/amazon">
            <div className="mask mask-squircle h-[90px] w-full bg-black flex justify-center items-center flex-col">
              <FaAmazon className="text-zinc-100 text-5xl" />
            </div>
            <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
              Amazon
            </h4>
          </Link>
        </div>
        <div>
          <Link href="/aliexpress">
            <div className="mask mask-squircle h-[90px] w-full bg-[#E43225] flex justify-center items-center flex-col">
              <SiAliexpress className="text-white text-5xl" />
            </div>
            <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
              AliExress
            </h4>
          </Link>
        </div>
        <div>
          <div className="mask mask-squircle h-[90px] w-full bg-[#003D29] flex justify-center items-center flex-col">
            <SiInstacart className="text-white text-5xl" />
          </div>
          <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
            Instacart
          </h4>
        </div>
        <div>
          <div className="mask mask-squircle h-[90px] w-full bg-black flex justify-center items-center flex-col">
            <CgAdidas className="text-white text-5xl" />
          </div>
          <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
            Adidas
          </h4>
        </div>
        <div>
          <div className="mask mask-squircle h-[90px] w-full bg-[#eb6d20] flex justify-center items-center flex-col">
            <FaEtsy className="text-white text-5xl" />
          </div>
          <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
            Etsy
          </h4>
        </div>
        <div>
          <div className="mask mask-squircle h-[90px] w-full bg-black flex justify-center items-center flex-col">
            <SiNike className="text-white text-5xl" />
          </div>
          <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
            Nike
          </h4>
        </div>
        <div>
          <div className="mask mask-squircle h-[90px] w-full bg-zinc-800 flex justify-center items-center flex-col">
            <SiUbereats className="text-5xl text-[#04c76a]" />
          </div>
          <h4 className="text-md text-zinc-800 font-semibold text-center mt-2">
            UberEats
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
