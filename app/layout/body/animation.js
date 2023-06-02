import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJsonHome from '/public/flyingDeveloper.json';
import lottieJsonAbout from '/public/team.json';

export function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJsonHome}
      play
      style={{ width: '50%', height: '50%' }}
    />
  );
}

export function AnimationAbout() {
  return (
    <Lottie
      loop
      animationData={lottieJsonAbout}
      play
      style={{ width: '110%', height: '110%' }}
    />
  );
}
