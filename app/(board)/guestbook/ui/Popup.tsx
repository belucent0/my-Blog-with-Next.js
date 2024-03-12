"use client";

import { useState, useEffect } from "react";

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const isPopupClosed = localStorage.getItem("isPopupClosed"); //마운트 하면서 isPopupClosed 값을 가져와보기
        const closedTime = localStorage.getItem("closedTime");
        const currentTime = new Date().getTime();

        if (
            !isPopupClosed || //isPopupClosed가 존재하지 않거나(null)
            (closedTime && currentTime - Number(closedTime) > 1 * 60 * 60 * 1000) //closedTime 존재하면서, 현재시간-닫은시간이 24시간보다 크다면
        ) {
            setIsOpen(true); //열기
        } else {
            setIsOpen(false); //닫기
        }
    }, []);

    // 배너 닫을 때 상태 저장 하고 배너 닫기
    const closePopup = () => {
        const currentTime = new Date().getTime();

        localStorage.setItem("isPopupClosed", "true"); // 닫을 때 isPopupClosed를 true값으로 저장
        localStorage.setItem("closedTime", currentTime.toString()); //현재 시간 저장하기
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-7">
            <div className="flex max-w-xs transform flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl dark:bg-slate-700 md:max-w-md md:p-6">
                <div className="w-full text-center">
                    <h3 className="text-md mb-3 inline-block font-medium leading-6 text-gray-900 md:text-lg">
                        소셜로그인 후 방명록 작성 및 삭제가 가능합니다.
                    </h3>
                </div>
                <button
                    type="button"
                    className="focus-visible:ring-offset-blue inline-flex justify-center self-end rounded-md border border-transparent bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-900 hover:bg-blue-200 focus:outline-none dark:bg-slate-400 md:px-4 md:py-2 md:text-sm"
                    onClick={closePopup}
                >
                    하루 동안 닫기
                </button>
            </div>
        </div>
    );
}
