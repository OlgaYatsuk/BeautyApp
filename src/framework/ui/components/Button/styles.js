import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignSelf: 'center',
    width: '100%',
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.pink,
    paddingVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
  },
});
