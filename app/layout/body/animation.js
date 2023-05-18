import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/flyingDeveloper.json'

export default function Animaiton() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `60%`, height: `60%` }}
    />
  )
}