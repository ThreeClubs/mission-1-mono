import React from "react";

function HeroSection() {
  return (
    <main className="mt-8 w-full flex flex-col items-center">
      <div className="max-w-4xl mx-4 ">
        <h2 className="pb-1 font-bold text-xl text-blue-700 border-b border-blue-200">
          1000's of Quality Cars for Sale!
        </h2>
        <p className="text-sm mt-4 text-gray-600">
          Turners Cars is the largest used car network in New Zealand with 20
          car dealer locations nationwide. With a huge range of around 3,000
          cars for sale (and 1,500 being made ready for sale at any one time)
          there is truly something for everyone. We’ve been helping Kiwis buy
          and sell used cars for over 50 years. And if you want car finance or
          car insurance, we can sort that out for you as well.
        </p>
      </div>
    </main>
  );
}

export default HeroSection;
