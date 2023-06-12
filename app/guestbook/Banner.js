"use client";

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");
    const closedTime = localStorage.getItem("closedTime");
    const currentTime = new Date().getTime();

    if (
      !isBannerClosed ||
      (closedTime && currentTime - closedTime > 24 * 60 * 60 * 1000)
    ) {
      //24시간 동안 보지 않기
      setIsShowing(true);
    }
  }, []);

  // 배너 닫을 때 로컬 스토리지에 상태를 저장
  const handleCloseBanner = () => {
    const currentTime = new Date().getTime();

    localStorage.setItem("isBannerClosed", "true");
    localStorage.setItem("closedTime", currentTime.toString());
    setIsShowing(false);
  };

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 dark:bg-gray-600 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="text-xs leading-6 pl-2 md:text-sm">
            <strong className="font-semibold">소셜 로그인 </strong>
            후 방명록을 남길 수 있습니다.
          </div>
        </div>
        <div className="flex flex-auto justify-end">
          <button
            type="button"
            className="-m-3 p-3 text-xs focus-visible:outline-offset-[-4px]"
            onClick={handleCloseBanner}
          >
            <span className="sr-only">Dismiss</span>
            하루 닫기 X
          </button>
        </div>
      </div>
    </Transition>
  );
}
