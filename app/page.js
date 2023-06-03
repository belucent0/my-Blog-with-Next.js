"use client";

import {Animation} from "./layout/body/animation";
import Hero from "./layout/body/hero";

export default async function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="container min-h-screen mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <Animation />
          <Hero />
        </div>
      </section>
    </div>
  );
}