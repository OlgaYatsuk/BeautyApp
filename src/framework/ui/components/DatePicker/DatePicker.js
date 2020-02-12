import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {theme} from './theme';
import {Animated, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const DatePicker = ({
  minDate,
  markedDates,
  style,
  isCalendarVisible,
  onDayPress,
  children,
}) => {
  const [bottomValue] = useState(new Animated.Value(-500));

  const showCalendar = () => {
    Animated.spring(bottomValue, {
      toValue: 0,
      duration: 850,
    }).start();
  };

  const hideCalendar = () => {
    Animated.spring(bottomValue, {
      toValue: -500,
      duration: 800,
    }).start();
  };

  if (isCalendarVisible) showCalendar();

  return (
    <Animated.View style={[styles.datePicker, {bottom: bottomValue}]}>
      <TouchableOpacity
        onPress={hideCalendar}
        style={styles.calendarTouchableZone}
      />
      <View style={styles.hideCalendarButton} transform={[{rotate: '45deg'}]} />
      <Calendar
        markedDates={markedDates}
        style={style}
        theme={theme}
        current={new Date()}
        minDate={minDate || new Date()}
        onDayPress={onDayPress}
        monthFormat={'yyyy MMMM'}
        firstDay={1}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
      {children}
    </Animated.View>
  );
};
