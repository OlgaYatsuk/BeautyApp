import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const Button = ({title, type, onPress, disabled, style}) => {
  const getButtonStyles = () => {
    let buttonStyle = [styles.button];

    if (type) {
      buttonStyle.push(styles[`${type}`]);
    }

    if (style) {
      buttonStyle.push(style);
    }

    return buttonStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={!onPress || disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
