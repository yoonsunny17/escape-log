"use client";

import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import { useRouter } from "next/navigation";

const TOP_OFFSET = 66;

const Navbar = () => {
  const router = useRouter();

  const [showBackground, setShowBackground] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
          flex
          flex-row
          items-center
          transition
          duration-500
          px-4
          md:px-16
          py-6
          ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
          `}
      >
        {/* logo */}
        <img
          onClick={() => router.push("/")}
          src="/images/logo.png"
          alt="text-logo"
          className="cursor-pointer"
        />

        {/* navbar items */}
        <div className="lg:flex flex-row ml-8 gap-7 hidden">
          <NavbarItem label="Home" path="/" />
          <NavbarItem label="My Escapes" path="/my-escapes" />
          <NavbarItem label="Wishlist" path="/wishlist" />
          <NavbarItem label="Community" path="/community" />
        </div>

        {/* mobile menu */}
        <div
          onClick={toggleMobileMenu}
          className="
            lg:hidden 
            flex 
            flex-row 
            items-center 
            gap-2 
            ml-8 
            cursor-pointer
            relative
            "
        >
          <p className="text-white text-sm">Menu</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>

        {/* profile menu */}
        <div className="flex flex-row ml-auto gap-6 items-center">
          {/* search */}
          <div className="text-white hover:text-sub2 cursor-pointer transition">
            <BsSearch />
          </div>

          {/* noti */}
          <div className="text-white hover:text-sub2 cursor-pointer transition">
            <BsBell />
          </div>

          {/* account */}
          <div
            onClick={toggleAccountMenu}
            className="
              flex
              flex-row
              items-center
              gap-2
              cursor-pointer
              relative
            "
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 outline outline-2 outline-main rounded-full p-1 bg-white">
              <img src="/images/alien-bold.png" alt="profile" />
            </div>
            <BsChevronDown
              className={`
                  text-white
                  transition
                  ${showAccountMenu ? "rotate-180" : "rotate-0"}
                `}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
