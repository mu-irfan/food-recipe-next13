import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[3px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <div>
      <header className="flex justify-between items-center py-2 bg-white px-4 sm:px-8 shadow-sm fixed w-full">
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Food recipe Logo"
            width={40}
            height={40}
            className="h-11"
          />
          <h1 className="font-raleway text-[32px] lg:text-2xl xl:text-[22px] font-bold lg:pt-3">
            Food Recipe
          </h1>
        </Link>
        <button
          className="flex flex-col justify-center items-center h-10 w-10 lg:hidden"
          onClick={() => setShowMobile(!showMobile)}
        >
          <div
            className={`${genericHamburgerLine} ${
              showMobile ? "rotate-45 translate-y-3 !my-1" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobile ? "opacity-0 !my-1" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobile ? "-rotate-45 -translate-y-3 !my-1" : "]"
            }`}
          />
        </button>
        <ul className="hidden lg:flex gap-5 xl:gap-12 text-lg font-normal lg:pt-1">
          <li className="nav-link">
            <Link href="/life">In Queue</Link>
          </li>
          <li className="nav-link">
            <Link href="/">About</Link>
          </li>

          <li className="nav-link">
            <Link href="/academic">Fresh</Link>
          </li>
          <li className="nav-link">
            <Link href="/academic">Orders</Link>
          </li>
          <li className="nav-link">
            <Link href="/reading-list">Contact</Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/login"
            className="border-2 border-black py-1 px-4 text-lg hover:bg-primary-100 hover:text-white hover:border-transparent rounded-sm"
          >
            Login
          </Link>

          <div className="relative">
            <Image
              src="/searchicon.svg"
              alt="Search"
              width={20}
              height={25}
              className="absolute top-2 left-2"
            />
            <input
              type="text"
              placeholder="Search"
              className="pr-3 pl-9 bg-body-200 w-[150px] xl:w-[250px] h-9 rounded-lg font-semibold"
            />
          </div>
        </div>
      </header>
      {showMobile && (
        <ul className="px-4 md:px-12 space-y-4 py-4 lg:hidden bg-white pt-20">
          <li className="flex items-center gap-2 text-base font-semibold">
            <Link href="/">In Queue</Link>
          </li>
          <li className="flex items-center gap-2 text-base font-semibold">
            <Link href="/life">About</Link>
          </li>
          <li className="flex items-center gap-2 text-base font-semibold">
            <Link href="/academic">Fresh</Link>
          </li>
          <li className="flex items-center gap-2 text-base font-semibold">
            <Link href="/">Orders</Link>
          </li>
          <li className="flex items-center gap-2 text-base font-semibold">
            <Link href="/about">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
