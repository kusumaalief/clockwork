import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col space-y-12 items-center text-center z-0">
      <Link
        className="bg-gradient-to-br hover:contrast-125 from-fuchsia-950 via-purple-950 text-white rounded-full py-2 px-4 to-cyan-950 flex"
        href="/"
      >
        <p>Discover new tools to make your work easier</p> <ChevronRight />
      </Link>

      <div className="pointer-events-none bg-gradient-to-br drop-shadow-2xl my-6 from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
        <h1 className="text-wrap w-[10em]">
          One app <br /> to replace them all
        </h1>
        <h2 className="mt-6">
          Get everyone working in a single platform
          <br />
          <span className="font-normal text-black">
            designed to manage any type of work.
          </span>
        </h2>
      </div>
      <Link
        href="/"
        className="text-white rounded-3xl hover:translate-y-2  duration-150 ease-in-out bg-gradient-primary"
      >
        <h2 className="flex text-4xl p-6 items-center ">
          Get Started. It's FREE <ChevronRight className="h-10 w-10 ml-2" />
        </h2>
      </Link>
    </div>
  );
}

export default Hero;
