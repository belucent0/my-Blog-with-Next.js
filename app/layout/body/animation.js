import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/flyingDeveloper.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `50%`, height: `50%` }}
    />
  )
}