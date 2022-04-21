import React from "react";

function JoinUs() {
  return (
    <section className="h-screen w-full grid grid-cols-5">
      <div className="bg-gray-300 col-span-3 px-8 py-24">
        <div className="w-3/5  text-left text-[#41416E]  space-y-6">
          <h2 className="text-6xl font-bold ">Why join the community</h2>
          <p className="text-lg opacity-90">
            Theragist is a community where anyone can share and receive strength
            to handle their stress
          </p>
        </div>
      </div>
      <div className="bg-gray-400 col-span-2"></div>
    </section>
  );
}

export default JoinUs;
