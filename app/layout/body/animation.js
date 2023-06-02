import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJsonHome from '/public/flyingDeveloper.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJsonHome}
      play
      style={{ width: `50%`, height: `50%` }}
    />
  )
}

