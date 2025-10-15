import { useEffect } from 'react';
import './IntroAnimation.css';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="intro-container">
      <div className="netflix-intro">
        <div className="letter-t">
          <div className="t-vertical" />
          <div className="t-horizontal" />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
