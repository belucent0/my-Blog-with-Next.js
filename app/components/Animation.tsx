"use client";

import Lottie from "react-lottie-player";
import lottieJsonAbout from "../../public/team.json";

// about 소개 페이지 애니메이션
export function AnimationAbout() {
  return (
      <Lottie
        loop
        animationData={lottieJsonAbout}
        play
        style={{ width: "100%", height: "100%" }}
      />
  );
}
