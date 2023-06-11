import Lottie from 'react-lottie-player';
import lottieJsonAbout from '/public/team.json';

export function AnimationAbout() {
  return (
    <Lottie
      loop
      animationData={lottieJsonAbout}
      play
      style={{ width: '100%', height: '100%' }}
    />
  );
}
