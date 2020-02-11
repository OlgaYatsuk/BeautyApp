import React from 'react';
import {Calendar} from 'react-native-calendars';

export const DatePicker = ({markedDates}) => {
  return (
    <Calendar
      markedDates={markedDates}
      current={new Date()}
      minDate={new Date()}
      onDayPress={day => console.log('day', day)}
      monthFormat={'yyyy MMMM'}
      firstDay={1}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};
