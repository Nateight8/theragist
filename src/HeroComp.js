import React from "react";

function HeroComp() {
  return (
    <section className="w-full h-screen relative">
      <h1 className="md:text-9xl text-7xl absolute text-[#E3E3E3] z-10 w-[90%] left-[5%] md:w-[60%] text-left font-bold bottom-[10%] md:left-[10%]">
        You are not alone!
      </h1>
      <img
        src="/hero.jpg"
        alt=""
        className="w-full h-full object-cover object-center sm:object-left "
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(19,133,148,0.50)] to-transparent" />
    </section>
  );
}

export default HeroComp;
