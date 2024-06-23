import React from "react";
import HowitWorkSteps from "@/app/components/Sections/HowitWorkSteps";

const HowitWork = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl text-zinc-900 md:text-3xl mb-2 font-bold">
        How it works?
      </h3>
      <div className="lg:flex gap-6 mt-7">
        <div className="lg:w-7/12">
          <HowitWorkSteps />
        </div>
        <div className="lg:w-5/12"></div>
      </div>
    </div>
  );
};

export default HowitWork;
