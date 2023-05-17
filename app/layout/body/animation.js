import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '/public/animation.json'

export default function Animaiton() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
  )
}