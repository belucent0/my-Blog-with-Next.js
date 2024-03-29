import Link from "next/link";
import Hero from "./components/Hero";
import Image from "next/image";

// 홈 뼈대
export default async function Home() {
    return (
        <>
            <section className="body-font flex flex-col items-center justify-center text-gray-600">
                <div className="relative mx-auto min-h-screen w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16 lg:py-24">
                    <div className="mx-auto flex w-full text-left">
                        <div className="relative mx-auto inline-flex items-center align-middle">
                            <div className="text-center">
                                <Hero />
                                <div className="mx-auto mt-6 flex w-full max-w-2xl justify-center gap-2">
                                    <Link href="/about">
                                        <div className="mt-3 rounded-lg sm:mt-0">
                                            <button className="transform rounded-xl bg-indigo-700 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:px-10">
                                                소개 보기
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="intro">
                        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-lg pt-24 lg:px-10">
                            <Image
                                width={2340}
                                height={1560}
                                className="w-full rounded-xl object-cover object-center"
                                alt="hero"
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            />
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
