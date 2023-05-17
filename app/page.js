"use client";

import Animation from "./layout/body/animation";
import Hero from "./layout/body/hero";

export default async function Home() {
  return (
    <div>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Hero />
          <Animation />
        </div>
      </section>
    </div>
  );
}
