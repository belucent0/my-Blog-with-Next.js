"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  function tmpCloseModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed")  //마운트 하면서 isBannerClosed 값을 가져와보기
    const closedTime = localStorage.getItem("closedTime");
    const currentTime = new Date().getTime();

    if (
      !isBannerClosed || //isBannerClosed가 존재하지 않거나(null)
      (closedTime && currentTime - Number(closedTime) > 1 * 60 * 60 * 1000) //closedTime 존재하면서, 현재시간-닫은시간이 24시간보다 크다면
    ) { 
      setIsOpen(true); //열기
    } else {
      setIsOpen(false) //닫기
    }
    
  }, []);

// 배너 닫을 때 상태 저장 하고 배너 닫기
  const closeModal = () => {
    const currentTime = new Date().getTime();
  
    localStorage.setItem("isBannerClosed", "true"); // 닫을 때 isBannerClosed를 true값으로 저장
    localStorage.setItem("closedTime", currentTime.toString()); //현재 시간 저장하기
    setIsOpen(false)
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={(tmpCloseModal)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xs md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-md font-medium leading-6 text-gray-900 md:text-lg"
                  >
                    소셜로그인 후 방명록을 남길 수 있습니다.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">

                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      하루 동안 닫기
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}