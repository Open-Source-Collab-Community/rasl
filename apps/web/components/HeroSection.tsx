import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* todo */}
          <TextGenerateEffect
          // className="text-center text-[340px]"
          duration={2}
          filter={true}
          words="Realtime audio Streaming library"
          />

          {/* <h1 className="whitespace-nowrap my-10 py-2 md:mt-0 text-lg md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Realtime audio Streaming library
          </h1> */}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl my-2 text-white">
            Hi, get ready to Dive in and explore a world of endless musical
            possibilities, crafted just for you.
          </p>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
           Builded on top of Socket.io
          </p>

          <div className="mt-4">
            <Link href={"/documentation"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Getting Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
