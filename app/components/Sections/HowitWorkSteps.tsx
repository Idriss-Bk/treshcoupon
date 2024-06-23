import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";

const HowitWorkSteps = () => {
  return (
    <div>
      <div>
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400" />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-zinc-900 capitalize">
              <TbHandClick className="text-2xl relative -top-[2px]" /> Première
              étape
            </h3>
            <p className="mt-2 text-sm text-zinc-700">
              Choisissez le réseau social que vous voulez pirater gratuitement!
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400" />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-zinc-900 capitalize">
              <AiFillEdit className="text-2xl relative -top-[2px]" /> Deuxième
              étape
            </h3>
            <p className="mt-2 text-sm text-zinc-700">
              Entrez les informations qui vous sont demandées, puis cliquez sur
              le bouton "
              <span className="text-amber-500 font-semibold">
                Commencez maintenant
              </span>
              "
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400" />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-zinc-900 capitalize">
              <LuAlarmClock className="text-2xl relative -top-[2px]" />{" "}
              Troisième étape
            </h3>
            <p className="mt-2 text-sm text-zinc-700">
              Attendez un moment, le serveur prend souvent 40 secondes à une
              minute pour obtenir le mot de passe.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400" />
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-zinc-900 capitalize">
              <IoCheckmarkDoneSharp className="text-2xl text-[#7bbb29] relative -top-[1px]" />{" "}
              Quatrième étape
            </h3>
            <p className="mt-2 text-sm text-zinc-700">
              Vous serez redirigé directement vers la page où vous recevrez le
              mot de passe.
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
      </div>
    </div>
  );
};

export default HowitWorkSteps;
