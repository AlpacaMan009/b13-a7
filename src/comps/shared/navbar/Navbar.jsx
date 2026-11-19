"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";

export default function Navbar() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(null);

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: <RiHome2Line />,
    },
    {
      href: "/timeline",
      label: "Timeline",
      icon: <CiClock2 />,
    },
    {
      href: "/stats",
      label: "Stats",
      icon: <BsGraphUp />,
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map(({ href, label, icon }) => {
              const isActive = pathname === href || clicked === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setClicked(href)}
                    className={`flex ${
                      isActive ? "bg-[#244d3f] text-white" : ""
                    }`}
                  >
                    {icon} <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-2xl text-[#244d3f]">
          <span className="font-bold text-[#1F2937]">Keen</span>Keeper
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex navbar-end space-x-3">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href || clicked === href;

          return (
            <Link
              key={href}
              href={href}
              onClick={() => setClicked(href)}
              className={`btn flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-[#244d3f] text-white border-[#244d3f] hover:bg-[#1a3a2f]"
                  : "bg-transparent text-gray-600 border-transparent hover:bg-gray-100"
              }`}
            >
              {icon} {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
