"use client";

import Animation from "./layout/body/animation";
import Hero from "./layout/body/hero";

export default async function Home() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Animation />
          <Hero />
        </div>
      </section>
    </div>
  );
}
