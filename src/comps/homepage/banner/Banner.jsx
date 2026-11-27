import React from "react";
import Info from "./Info";
import Friends from "./Friends";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center">
        Friends to keep close in your life
      </h2>
      <p className="text-gray-500 font-light text-md text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn mt-6 bg-[#244d3f] text-white">+ Add Friend</button>

      {/* <Info totalFriends={totalFriends}></Info> */}

      <div className="divider"></div>
      <Friends></Friends>
    </div>
  );
};

export default Banner;
