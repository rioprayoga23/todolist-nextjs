import React from "react";
import Image from "next/image";

// import image
import bg from "../../public/bg.jpg";

const Header = () => {
  return (
    <header className="relative">
      <Image
        src={bg}
        alt={"bg-img"}
        className="w-full bg-cover md:h-[270px]"
        priority={true}
      />
      <div className="absolute top-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-75 h-full w-full"></div>
      <div className="absolute bottom-5 px-3">
        <h1 className="text-3xl font-semibold text-white">TodoApp👋</h1>
        <p className="text-sm text-white mt-1">
          Helps to manage all of your tasks.
        </p>
      </div>
    </header>
  );
};

export default Header;
