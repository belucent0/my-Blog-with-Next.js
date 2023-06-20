"use client";

import { AnimationAbout } from "../components/Animation";
import Link from "next/link";

export default function about() {
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
            <p className="w-full leading-relaxed text-gray-800 lg:w-1/2"></p>
          </div>
          <div className="mx-auto w-full max-w-[700px] lg:w-4/6">
            <AnimationAbout />
          </div>

          <div className="mt-3 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800 lg:p-8">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src="https://vividnowblog.s3.ap-northeast-2.amazonaws.com/%ED%94%84%EB%A1%9C%ED%95%84.png"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    className="h-full w-full object-cover object-center transition duration-300 hover:scale-110"
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    김재광
                  </div>
                  <div className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    <p className="text-base">"일신우일신(日新又日新)"</p>
                    <p className="text-base">Node.js 기반한 웹개발에 관심</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/vividnow"
                        className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        target="_blank"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://veams.tistory.com/"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        target="_blank"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                &nbsp;&nbsp;늘 사람의 성장을 돕는 것에 관심이 많았습니다. 각기
                다른 개인이 자신의 라이프스타일 속에서 어떻게 자신의 어려움을
                해결하며 삶을 성장시켜 나가는지 호기심이 있습니다. 그래서
                심리상담 및 교육분야에서 경험을 쌓으며 각기 다른 다양한 사람들이
                자기 마음을 읽고 발전하는데 도움을 줄 수 있을지 고민해왔습니다.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                &nbsp;&nbsp;이 관심은 웹을 개발하는 현재에도 변함이 없습니다.
                이제 개발자라는 새로운 역할을 기반으로, 웹 서비스를 제공하며
                사람들이 일상에서 겪는 어려움과 불편을 해결하는 조력자가 되고자
                합니다. 고객의 마음을 읽어 회사 서비스의 성장에 기여하고자
                합니다.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                &nbsp;&nbsp;Node.js 환경에서 처음 개발을 시작했다보니,
                JavaScript 생태계를 더욱 이해하고 싶은 욕심이 생깁니다. 그동안
                서버 사이드 개발을 주로 학습하긴했지만, 전체 개발 프로세스를
                이해하는 동시에 타 직무와의 소통에 더 능숙한 개발자가 되고자
                Next.js를 활용하여 이 블로그를 손수 개발하였습니다.
              </p>
              <div className="flex justify-around">
                <Link
                  href={
                    "https://veams.notion.site/c4a07422aaa24976808a1f80ead8aff2?pvs=4"
                  }
                  className="inline-flex items-center text-indigo-500"
                  target="_blank"
                >
                  이력서 보기
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href={"/projects"}
                  className="inline-flex items-center text-indigo-500"
                >
                  프로젝트 보기
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-1 h-4 w-4"
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
