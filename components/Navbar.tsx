import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import logo from "../assets/gtm.svg";
import { NavIcon } from "./NavIcon";
import { useRouter } from "next/router";
import {
  HomeIcon,
  LightningBoltIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export const Navbar: NextPage = () => {
  const router = useRouter();
  const redirectHandler = () => {
    router.replace("/");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div onClick={redirectHandler} className="cursor-pointer hover:scale-110">
        <Image src={logo} alt="gtm logo" className="object-contain" />
      </div>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <NavIcon icon={HomeIcon} title="Home" />
        <NavIcon icon={LightningBoltIcon} title="Favourites" />
        <NavIcon icon={CollectionIcon} title="Collections" />
        <NavIcon icon={SearchIcon} title="Search" />
        <NavIcon icon={UserIcon} title="Account" />
      </div>
    </div>
  );
};
