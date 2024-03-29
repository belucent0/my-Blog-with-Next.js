"use client";

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Label } from "@radix-ui/react-label";
import { Button as Button2 } from "../../../components/ui/button";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface DeleteAccountModalProps {
    sessionEmail: string;
}

// 계정 삭제창 작동
export default function DeleteAccountModal({ sessionEmail }: DeleteAccountModalProps): JSX.Element {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isDisable, setIsDisable] = useState(true);
    const [isAble, setIsAble] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(sessionEmail);
    }, [sessionEmail]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const form = new FormData(event.target as HTMLFormElement);
            const password = form.get("password") as string;
            setPassword(password);

            if (!password) {
                alert("비밀번호를 입력해주세요.");
            }

            const response = await fetch("/api/auth/password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
            }

            if (result.status === "error") {
                throw new Error(result.message);
            }

            if (result.status === "success") {
                setIsDisable(false);
                setIsAble(true);
            }
        } catch (error) {
            alert("계정 삭제에 실패했습니다.");
        }
    };

    const handleDeleteAccount = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (!password) {
                return alert("비밀번호를 입력해주세요.");
            }

            const response = await fetch("/api/auth/withdrawal", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (result.status === "fail") {
                alert(result.message);
            }

            if (result.status === "error") {
                throw new Error(result.message);
            }

            if (result.status === "success") {
                alert(result.message);
                await signOut();
                window.location.reload();
            }
        } catch (error) {
            alert("계정 삭제에 실패했습니다.");
        }
    };

    return (
        <>
            <Button
                onPress={onOpen}
                className="mb-2 inline-block rounded-lg bg-indigo-700 px-3 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base"
            >
                계정삭제창
            </Button>

            <Modal placement={"center"} size={"md"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody>
                                <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                                    <div className="p-8 py-12 sm:p-16">
                                        <div className="space-y-4">
                                            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                                                계정 삭제를 위한 <br />
                                                정보를 입력해주세요.
                                            </h2>
                                            <div>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="my-3" />
                                                    <div className="flex flex-col space-y-1.5">
                                                        <Label htmlFor="password">비밀번호</Label>
                                                        <Input
                                                            id="password"
                                                            name="password"
                                                            placeholder="비밀번호를 입력해주세요"
                                                            type="password"
                                                            autoComplete="off"
                                                            minLength={8}
                                                            required
                                                            disabled={isAble}
                                                        />
                                                    </div>
                                                    <div className="mt-4 flex justify-center">
                                                        <Button2
                                                            disabled={isAble}
                                                            className="w-full  bg-indigo-700 hover:bg-indigo-500  disabled:bg-slate-300"
                                                        >
                                                            비밀번호 확인
                                                        </Button2>
                                                    </div>
                                                </form>

                                                <form onSubmit={handleDeleteAccount}>
                                                    {isDisable ? (
                                                        <div className="mt-4 flex justify-center text-xs text-slate-400">
                                                            <p>
                                                                소셜로그인 정보 삭제 기능은 미구현입니다.
                                                                <br />
                                                                해당 서비스에서 직접 삭제해주세요.
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <div className="mt-4 flex flex-col justify-center rounded-lg border-2 border-indigo-400">
                                                            <div className="my-2 w-full text-center text-sm font-bold text-indigo-700">{email}</div>
                                                            <Button2
                                                                disabled={isDisable}
                                                                onClick={handleDeleteAccount}
                                                                className="w-full rounded-t-none bg-indigo-700 hover:bg-indigo-500"
                                                            >
                                                                계정 삭제하기
                                                            </Button2>
                                                        </div>
                                                    )}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="bg-transparent">
                                <Button
                                    className="mb-1 inline-block rounded-lg bg-indigo-700 px-2 py-1 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-indigo-500 md:text-base"
                                    onPress={() => {
                                        onClose();
                                        setIsAble(false);
                                        setIsDisable(true);
                                        setPassword("");
                                    }}
                                >
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
