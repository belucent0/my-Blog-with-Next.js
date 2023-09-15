"use client";

import Lottie from "react-lottie-player";
import lottieJsonAbout from "../../public/team.json";
import Loading from "../loading";
import { useEffect, useState } from "react";

// about 소개 페이지 애니메이션
export function AnimationAbout() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])
  
  return (
    <>
    {isLoading && <Loading/>}
    <Lottie
        loop
        animationData={lottieJsonAbout}
        play
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
