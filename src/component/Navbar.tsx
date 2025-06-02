"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "../utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu"; // Ensure these are defined

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    {
      href: "/",
      item: "Home",
      subItems: ["Web Development", "Coding", "Mobile Applications"],
    },
    {
      href: "/services",
      item: "Services",
      subItems: ["Web Development", "Coding", "Mobile Applications"],
    },
    {
      href: "/cources",
      item: "Cources",
      subItems: ["Web Development", "Coding", "Mobile Applications"],
    },
    {
      href: "/form",
      item: "New",
      subItems: ["Web Development", "Coding", "Mobile Applications"],
    },
  ];

  return (
    <div
      className={cn("fixed  inset-x-0 max-w-xl mx-auto z-50 mt-6", className)}
    >
      <div
        className={cn(
          "flex flex-row items-center justify-center space-x-6 ",
          className
        )}
      >
        <Menu setActive={setActive}>
          {menuItems.map(({ href, item, subItems }) => (
            <Link key={item} href={href} passHref>
              <MenuItem setActive={setActive} active={active} item={item}>
                <div className="flex flex-col space-y-2 text-sm  ">
                  {subItems.map((sub) => (
                    <div key={sub}>{sub}</div>
                  ))}
                </div>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
