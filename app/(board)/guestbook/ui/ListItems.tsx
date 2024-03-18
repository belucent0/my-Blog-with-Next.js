"use client";

import { LoginModal, LogoutBtn } from "./LoginBtn";
import WriteForm from "./WriteForm";
import { useRouter } from "next/navigation";
import DeleteAccountModal from "./DeleteAccount";
import { Session } from "next-auth";

export interface ListItemProps {
    session: Session | null;
    guestbookList: GuestbookList[];
}

export interface GuestbookList {
    _id: string;
    content: string;
    authorName: string;
    authorEmail: string;
}

export default function ListItem({ session, guestbookList }: ListItemProps): JSX.Element {
    const router = useRouter();

    // 방명록 삭제
    const handleDelete = async (id: string, index: number, e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const response = await fetch("/api/guestbook/deletion", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
            }

            if (result.status === "error") {
                throw new Error(result.message);
            }

            const listItem = (e.target as HTMLElement).closest(".listitem");

            if (listItem) {
                alert(result.message);
                router.refresh();
            }
        } catch (error) {
            alert("삭제 중 오류 발생");
        }
    };

    const userName: string = session ? session?.user?.name : null;

    const sessionEmail: string = session ? session?.user?.email : null;

    const sessionBtn = (
        <span>
            {session && userName ? (
                <span>
                    <div className="flex">
                        <LogoutBtn />
                        <div className="flex grow" />
                        <DeleteAccountModal sessionEmail={sessionEmail} />
                    </div>
                    <WriteForm userName={userName} />
                </span>
            ) : (
                <LoginModal />
            )}
        </span>
    );

    return (
        <>
            <div>{sessionBtn}</div>
            <>
                {guestbookList.length === 0 && (
                    <div className="my-20 text-center text-lg font-bold text-indigo-500 sm:text-xl">방명록이 없습니다.</div>
                )}
                {guestbookList.map((v, i) => (
                    <div
                        key={i}
                        className="listitem mb-2 flex items-center justify-between rounded-lg bg-gray-100 p-1.5 shadow-md dark:bg-gray-800 sm:mb-3 sm:p-3"
                    >
                        <div>
                            <h4 className="text-base font-bold sm:mb-1 sm:text-lg">{guestbookList[i].content}</h4>
                            <p className="text-sm text-gray-500 sm:mb-1 sm:text-base">{guestbookList[i].authorName}</p>
                        </div>
                        {session && sessionEmail === guestbookList[i].authorEmail && (
                            <button className="text-sm sm:text-base" onClick={e => handleDelete(guestbookList[i]._id, i, e)}>
                                🗑삭제
                            </button>
                        )}
                    </div>
                ))}
            </>
        </>
    );
}
