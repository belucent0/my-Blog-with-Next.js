import Intro from "./Intro";
import Projects from "./Projects";

export const metadata = {
    title: "[소개]|VIVIDNOW의 블로그",
    description: "마음을 읽는 개발자 김재광입니다",
  };

export default function aboutPage() {
    return (
        <>
        <Intro />
        <div className="my-24"></div>
        <Projects />
        </>
        )
    }