import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-purple-400">
      {/* hero leftside */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10  sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">WE ARE BEST</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            BRAND OF QUALITY
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm sm:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <img
        src="https://cdn.pixabay.com/photo/2018/04/07/19/39/woman-3299379_1280.jpg"
        alt=""
        className="w-full sm:w-1/2"
      />
    </div>
  );
};

export default Hero;
