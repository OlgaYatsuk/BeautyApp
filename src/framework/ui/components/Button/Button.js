import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, disabled, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={!onPress || disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
