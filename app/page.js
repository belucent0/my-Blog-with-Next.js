"use client";

import Link from "next/link";
import Hero from "./components/Hero";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="relative min-h-screen items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                  <Hero/>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <Link href={"/about"}>
                    <div className="mt-3 rounded-lg sm:mt-0">
                      <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-700 lg:px-10 rounded-xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">소개 보기</button>
                    </div>
                   </Link>
                   <Link href={"/projects"}>
                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-indigo-700 dark:text-indigo-300 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">프로젝트 보기</button>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <section id="intro">
            <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
              <img className="object-cover object-center w-full rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}