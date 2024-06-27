"use client";
import React, { useEffect, useState } from "react";
import { Unbounded } from "next/font/google";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Home() {
  const [gradientClass, setGradientClass] = useState(
    "bg-gradient-to-r from-blue-500 to-teal-400"
  );
  const [boxShadowClass, setBoxShadowClass] = useState(
    "shadow-[0px_22px_70px_4px_rgba(59,130,246,0.56)]"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gradientClass === "bg-gradient-to-r from-blue-500 to-teal-400") {
        setGradientClass("bg-gradient-to-r from-purple-800 to-pink-500");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(165,85,247,0.56)]");
      } else if (
        gradientClass === "bg-gradient-to-r from-purple-800 to-pink-500"
      ) {
        setGradientClass("bg-gradient-to-r from-red-500 to-yellow-300");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(253,186,116,0.56)]");
      } else if (
        gradientClass === "bg-gradient-to-r from-red-500 to-yellow-300"
      ) {
        setGradientClass("bg-gradient-to-r from-blue-500 to-teal-400");
        setBoxShadowClass("shadow-[0px_22px_70px_4px_rgba(59,130,246,0.56)]");
      }
    }, 2100);

    return () => clearInterval(intervalId);
  }, [gradientClass]);

  return (
    <section className="min-h-max bg-white bg-[url('/hero-bg.svg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-8">
        <Link
          href="/"
          className="inline-flex md:flex-row flex-col md:justify-between justify-center items-center py-1 px-1 pr-4 text-sm text-gray-900 bg-purple-200 md:rounded-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100  hover:bg-purple-200"
        >
          <span className="w-min text-xs bg-gradient-to-tr from-purple-500 to-pink-300 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            We are launching our IPO this month - read our blog!
          </span>
          <svg
            aria-hidden="true"
            className="ml-2 w-5 h-5 md:block hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1 className={`text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight ${unbounded.className}`}>
          <span className="inline bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 bg-clip-text font-display tracking-tight text-transparent">Customer</span> Connect <span className="inline bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display tracking-tight text-transparent">Portal.</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
        Designed to streamline customer interactions and enhance productivity, CustomerConnect Portal offers a seamless user experience with a modern and intuitive interface.
        </p>
        <div className="w-full flex flex-col justify-center items-center sm:flex-row gap-y-3 gap-x-4 max-w-4xl mx-auto">
          <Button>Dashboard</Button>
          <Button
            type="button"
            className={`${boxShadowClass} ${gradientClass} gradient-1 relative font-medium text-base flex justify-center gap-2 items-center mr-2 overflow-hidden text-white group  group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-1 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-800`}
          >
            <span>Login</span>
          </Button>
        </div>
      </div>
    </section>
  );
}