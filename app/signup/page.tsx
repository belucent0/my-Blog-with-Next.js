"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, CardContainer, Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function signupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkingPassword, setCheckingPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            router.push("/guestbook");
        }
    }, []);

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (password !== checkingPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name, role: "guest" }),
            });

            if (response.status === 400) {
                const data = await response.json();
                alert(data.message);
                return;
            }

            if (!response.ok) throw new Error("서버 오류");

            const data = await response.json();

            alert(data.message);
            router.push("/guestbook");
        } catch (error) {
            console.error(error);
            alert("회원가입에 실패했습니다.");
        }
    };

    return (
        <>
            <div className="flex h-[1000px] flex-col items-center justify-center text-gray-600">
                <Card className="w-[400px]">
                    <CardContainer className="w-[400px]">
                        <CardHeader>
                            <CardTitle className="text-2xl">회원가입</CardTitle>
                            <CardDescription>서비스 사용을 위해 회원 정보를 입력하세요.</CardDescription>
                        </CardHeader>

                        <form onSubmit={handleSubmit}>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">이메일</Label>
                                        <Input
                                            id="email"
                                            placeholder="example@vividnow.com"
                                            required
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value.trim())}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">비밀번호</Label>
                                        <Input
                                            id="password"
                                            placeholder="8~15자리 영문+숫자+특수문자 조합"
                                            required
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value.trim())}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">비밀번호 확인</Label>
                                        <Input
                                            id="checkingPassword"
                                            placeholder="8~15자리 영문+숫자+특수문자 조합"
                                            required
                                            type="password"
                                            value={checkingPassword}
                                            onChange={e => setCheckingPassword(e.target.value.trim())}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="name">닉네임</Label>
                                        <Input
                                            id="name"
                                            placeholder="2~10자리의 닉네임"
                                            required
                                            type="text"
                                            value={name}
                                            minLength={2}
                                            maxLength={10}
                                            onChange={e => setName(e.target.value.trim())}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="w-full bg-indigo-700 hover:bg-indigo-500">
                                    가입하기
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContainer>
                </Card>
            </div>
        </>
    );
}
// 회원가입 api 문서화 body값에 이메일, 비밀번호, 이름, 역할을 보내준다.
/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: "회원가입"
 *     description: "회원가입을 위한 정보를 서버에 보냅니다."
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *                 example: "guest"
 *             example:
 *              email: "example@vividnow.com"
 *              password: "qweqwe123!"
 *              name: "아무개"
 *              role: "guest"
 *     responses:
 *       "200":
 *         description: 회원가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *               example:
 *                status: "success"
 *                message: "회원가입 성공"
 *       "400":
 *         description: 회원가입 실패
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *               example:
 *                status: "fail"
 *                message: "회원가입 실패"
 *       "500":
 *         description: 처리 중 서버 에러
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *               example:
 *                status: "error"
 *                message: "회원가입 처리 중 서버 에러"
 */
