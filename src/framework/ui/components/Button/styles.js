import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignSelf: 'center',
    width: '80%',
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.pink,
    paddingVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
  },
  buttonSmall: {
    width: 'auto',
    minWidth: 160,
    paddingVertical: 18,
    marginTop: 18,
    backgroundColor: colors.pink,
    marginHorizontal: 'auto',
  },
});
