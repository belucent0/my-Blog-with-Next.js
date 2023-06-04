"use client";

import {Animation} from "./layout/body/animation";
import Hero from "./layout/body/hero";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="container min-h-screen w-full max-w-[900px] flex px-5 py-8 md:flex-row flex-col items-center">
          <Animation />
          <Hero />
        </div>
      </section>
    </>
  );
}