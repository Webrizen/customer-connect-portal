"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar({ className, items, ...props }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 left-4 z-50 p-2.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
          />
        </svg>
      </button>
      <aside
        className={cn(
          "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 h-[85vh] py-3 overflow-hidden transition-all lg:-translate-x-0 bg-white border border-slate-200 rounded-xl flex-col justify-between px-4 lg:transition-none ease-linear md:sticky fixed top-[60px] mt-6 z-50",
          isSidebarOpen ? "translate-x-0" : "-translate-x-[110%]",
          className
        )}
        {...props}
      >
        <div className="min-h-max py-2 border-b border-b-gray-100 dark:border-b-gray-900">
          <Link
            href="/"
            className="flex items-center gap-x-3 font-semibold text-gray-800 dark:text-gray-200"
          >
            <span className="p-2.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            </span>
            Customer Connect Portal
          </Link>
        </div>
        <nav className="flex-1 pt-6">
          <ul className="text-gray-700 dark:text-gray-300 space-y-3">
            {items.map((item) => (
              <li
                className={cn(
                  pathname === item.href
                    ? "before:bg-[#00aeef]"
                    : "hover:bg-transparent hover:bg-slate-100",
                  "relative before:absolute before:-left-4 before:w-1.5 before:h-4/5 before:rounded-r-md before:top-1/2 before:-translate-y-1/2 "
                )}
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={cn(
                    pathname === item.href
                      ? "text-[#00aeef] bg-gray-50 dark:bg-gray-900/80"
                      : "hover:bg-transparent hover:bg-slate-100",
                    "justify-start flex items-center px-4 py-2.5 gap-x-3 rounded-md"
                  )}
                  onClick={closeSidebar}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
