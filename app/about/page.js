'use client'

// import AnimationAbout from "../layout/body/animationAbout";
import {AnimationAbout} from "../layout/body/animation"
import Link from "next/link";

export default async function about() {


  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto min-h-screen px-5 py-24">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                소개
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-500"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Node.js 환경에서 서버를 개발하는 것에 관심을 가지고 있습니다.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  김재광
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-500"></div>
                <p className="text-base">
                  안녕하세요
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">
                전직 심리상담사로, 팀내 상황 파악 및 공유를 중시하며 동료 특성에
                맞는 소통 스타일을 가지고 있습니다. 적극적 소통으로 팀내 필요한
                작업을 캐치하여 팀내 제약사항을 파악하고 협력하는 역할
                능숙합니다. 유지보수성을 고민하며, 고객 중심의 기획 및 설계를 잘
                하는 개발자가 되고자 합니다.
              </p>
              <Link
                href={"/about"}
                className="inline-flex items-center text-indigo-500"
              >
                이력서 보기
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              
            </div>
            
          </div>
          <div className="mx-auto lg:w-4/6 w-full max-w-[700px]">
            <AnimationAbout />
          </div>
        </div>
      </section>
    </>
  );
}
