"use client";

import { AnimationAbout } from "../layout/body/animation";
import Link from "next/link";

export default async function about() {
  return (
    <>
      <section className="body-font text-gray-700">
        <div className="container mx-auto min-h-screen px-5 py-8">
          <div className="mb-5 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                소개
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-700"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-800 lg:w-1/2">
              전직 심리상담사로서, 프로젝트시 팀내 상황파악 및 공유를 중시하며
              동료 특성에 맞는 소통 스타일을 구사할 수 있습니다. 적극적 소통으로
              팀내 필요한 작업을 캐치하여 팀내 제약사항을 파악하고 협력하는
              역할에 능숙합니다.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[700px] lg:w-4/6">
            <AnimationAbout />
          </div>

          <div className="mt-3 flex flex-col sm:flex-row">
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
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-700"></div>
                <p className="text-base">
                  일신우일신의 마음으로 살고자 합니다.
                </p>
                <p className="text-base">
                  Node.js 환경에서의 웹개발에 관심을 가지고 있습니다.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                저는 늘 각 개인의 성장을 돕는 것에 관심이 많았습니다. 각자가
                자신의 라이프스타일 속에서 어떻게 자신의 어려움을 해결하며 삶을
                성장시켜 나가는지 호기심이 있던 것입니다. 그래서 심리상담 및
                교육분야에서 경험을 쌓으며 각기 다른 다양한 사람들이 자기 마음을
                읽고 발전하는데 도움을 줄 수 있을지 고민해왔습니다.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                이 관심은 웹을 개발하는 현재에도 변함이 없습니다. 이제
                개발자라는 새로운 역할을 기반으로, 서비스를 통해 사람들이
                일상에서 겪는 어려움과 불편을 해결하는 조력자가 되고자 합니다.
                고객의 마음을 읽어 회사 서비스의 성장에 기여하고자 합니다.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Node.js로 개발을 시작했다보니, JavaScript 생태계를 좀 더
                이해하는 개발자가 되고 싶은 욕심이 생깁니다. 서버를 개발하는
                것을 주로 학습하긴했지만, 전체 개발 프로세스를 이해하는 동시에 타
                직무와의 소통에 더 능숙한 개발자가 되고자 이 블로그를 Next.js로
                개발하였습니다.
              </p>
              <div className="flex justify-around">
                <Link 
                  href={"/about"}
                  className="inline-flex items-center text-indigo-500"
                >
                  이력서 보기
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href={"/works"}
                  className="inline-flex items-center text-indigo-500"
                >
                  프로젝트 보기
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
