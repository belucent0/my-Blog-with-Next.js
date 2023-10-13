'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Loading from '../loading';
import Link from "next/link";

export default function ExcalidrawPage() {
  const [Excalidraw, setExcalidraw] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => setExcalidraw(comp.Excalidraw));
    setIsLoading(false);
  }, []);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>

<div className="container mx-auto min-h-screen px-3 py-3 md:px-24">
        <div className="mb-10 text-4xl md:text-6xl flex justify-between w-full">
          <h1 className="font-black ">Playground.</h1>
          <h1 className="font-black text-lg ">실험기능 모음입니다</h1>
        </div>

        <div className="mx-auto h-full px-5">
        <div className="h-[82vh] sm:h-[85vh] md:h-[88vh]">
          <button
            type="button"
            onClick={openModal}
            className="-nonefocus:outline mx-auto block rounded-md bg-black bg-opacity-20 px-4 py-2 text-3xl font-medium text-white hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            그림판 모달 열기
          </button>
          <Link
            href="/blog"
            className="my-5 block text-center text-lg font-black text-purple-700 hover:text-purple-500"
          >
            이전 페이지로 이동
          </Link>
        </div>
      </div>

      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div
                      as="h3"
                      className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                    >
                      <div className="text-xs md:text-sm">
                        종료 전 저장 필수!
                      </div>
                      <h1 className="text-center text-xl font-medium md:text-3xl">
                        그림판
                      </h1>

                      <button
                        type="button"
                        className="rounded-md border border-transparent bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:px-4 md:py-2 md:text-sm"
                        onClick={closeModal}
                      >
                        닫기
                      </button>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <div className="mx-auto h-full w-full px-5">
                          <div className="h-[82vh] sm:h-[85vh] md:h-[88vh]">
                            {isLoading ? (
                              <Loading />
                            ) : (
                              Excalidraw && (
                                <Excalidraw className="h-full w-full" />
                              )
                            )}
                          </div>
                        </div>
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>





      </div>

    



    </>
  );
}






