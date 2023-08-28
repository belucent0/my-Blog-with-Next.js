"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

//로그아웃 버튼 작동
export function LogoutBtn() {
  return (
    <button
      className="mb-2 inline-block rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base"
      onClick={() => {signOut();}}>로그아웃</button>
  );
}

export function LoginModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleSignIn = async (provider) => {
    await signIn(provider, {callbackUrl: "/guestbook"});
  };
  return (
    <>
      <Button onPress={onOpen} className="mb-2 inline-block rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base">
        로그인
      </Button>

      <Modal placement={"center"} size={"md"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <div className="p-8 py-12 sm:p-16">
                    <div className="space-y-4">
                      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                        방명록 작성을 위한 <br />
                        간편로그인
                      </h2>
                    </div>
                    <div className="mt-16 grid space-y-4">
                      <button
                        onClick={() => handleSignIn("naver")}
                        className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-green-500 before:duration-300 before:transition hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300 dark:before:border-gray-600 dark:before:bg-gray-700"
                      >
                        <span className="relative flex w-full items-center justify-center gap-3 text-base font-medium text-white dark:text-gray-200">
                          <img
                            src="https://blog.kakaocdn.net/dn/bU1uVm/btqGsLHK8Ha/ndkom6FPH3Ld5BXtGd7pt0/img.png"
                            className="absolute left-0 w-6"
                            alt="네이버"
                          />
                          <span>네이버로 시작</span>
                        </span>
                      </button>
                      <button
                        onClick={() => handleSignIn("kakao")}
                        className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-yellow-400 before:duration-300 before:transition hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300 dark:before:border-gray-600 dark:before:bg-gray-700"
                      >
                        <span className="relative flex w-full items-center justify-center gap-3 text-base font-medium text-white dark:text-gray-200">
                          <img
                            src="https://cdn.imweb.me/upload/S20210304872ba49a108a8/6285350df01af.png"
                            className="absolute left-0 w-6"
                            alt="카카오"
                          />
                          <span>카카오로 시작</span>
                        </span>
                      </button>
                      <button
                        onClick={() => handleSignIn("github")}
                        className="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-700 before:duration-300 before:transition hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300 dark:before:border-gray-600 dark:before:bg-gray-700"
                      >
                        <span className="relative flex w-full items-center justify-center gap-3 text-base font-medium text-white dark:text-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="absolute left-0 h-5 w-5"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                          <span>Github로 시작</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="bg-transparent">
                <Button className="mb-1 inline-block rounded-lg bg-indigo-700 px-2 py-1 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base" onPress={onClose}>
                  닫기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}