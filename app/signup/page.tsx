"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  CardContainer,
  Card,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function signupPage() {
  const [loginId, setId] = useState("");
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
        body: JSON.stringify({ loginId, password, name, role: "guest" }),
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
              <CardDescription>
                서비스 사용을 위해 회원 정보를 입력하세요.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loginId">아이디</Label>
                    <Input
                      id="loginId"
                      placeholder="영문+숫자 조합 6~15자리"
                      required
                      type="text"
                      value={loginId}
                      onChange={(e) => setId(e.target.value.trim())}
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
                      onChange={(e) => setPassword(e.target.value.trim())}
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
                      onChange={(e) =>
                        setCheckingPassword(e.target.value.trim())
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      placeholder="ex) 홍길동"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value.trim())}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-500"
                >
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
