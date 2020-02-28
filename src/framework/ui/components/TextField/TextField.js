// @flow

import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from './styles';

class TextField extends Component {
  state = {};

  render() {
    const {
      style,
      placeholder,
      onChangeText,
      onFocus,
      onBlur,
      label,
      value,
      ref,
    } = this.props;

    return (
      <>
        {label && (
          <View style={styles.inputLabelWrapper}>
            <Text style={styles.inputLabel}>{label}</Text>
          </View>
        )}
        <TextInput
          ref={ref}
          onChangeText={onChangeText}
          value={value}
          multiline
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[styles.textInput, style]}
        />
      </>
    );
  }
}

export default TextField;
