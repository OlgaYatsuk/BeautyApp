// @flow

import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

class TextField extends Component {
  state = {};

  render() {
    const {
      style,
      placeholder,
      onChange,
      onFocus,
      onBlur,
      value,
      ref,
    } = this.props;

    return (
      <TextInput
        ref={ref}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[styles.textInput, style]}
      />
    );
  }
}

export default TextField;
