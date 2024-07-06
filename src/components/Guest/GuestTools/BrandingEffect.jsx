import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBrand = () => {
  // State to trigger the animation
  const [trigger, setTrigger] = useState(false);

  const animatedStyles = useSpring({
    from: { backgroundPositionX: '100%' },
    to: { backgroundPositionX: '0%' },
    reset: trigger,
    reverse: trigger,
    onRest: () => setTrigger(false),
    onStart: () => setTrigger(true),
    config: { duration: 3000 },
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <animated.div
        onMouseEnter={() => setTrigger(!trigger)}
        className='text-white font-bold text-5xl bg-clip-text'
        style={{
          ...animatedStyles,
          backgroundImage:
            'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Ve-Store<span className='text-transparent'>®</span>
      </animated.div>
    </div>
  );
};

export default AnimatedBrand;
