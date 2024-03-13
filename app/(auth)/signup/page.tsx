import SignupCard from "./SignupCard";

export const metadata = {
    title: "[가입]|VIVIDNOW의 블로그",
    description: "마음을 읽는 개발자 김재광입니다",
};

export default function signupPage() {
    return (
        <>
            <div>
                <SignupCard />
            </div>
        </>
    );
}
