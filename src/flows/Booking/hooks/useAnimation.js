import React, {useState} from 'react';
import {Animated} from 'react-native';

export const TransformingView = props => {
  const [bottomPosition] = useState(new Animated.Value('-300')); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(bottomPosition, {
      toValue: 200,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        bottomPosition: bottomPosition,
      }}>
      {props.children}
    </Animated.View>
  );
};
