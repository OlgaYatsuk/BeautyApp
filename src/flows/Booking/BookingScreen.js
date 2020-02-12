import React, {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {SpecialistInfo} from './сomponents/SpecialistInfo/SpecialistInfo';
import {commonStyles} from '../../framework/ui/styles';
import {AvailableServices} from './сomponents/AvailableServices';
import {Button, DatePicker} from '../../framework/ui/components';
import {useCalendar} from './hooks/useCalendar';

export const BookingScreen = () => {
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [
    isConfirmationWindowVisible,
    setConfirmationWindowVisibility,
  ] = useState(false);
  const {onDaySelection, selectedDate} = useCalendar();

  const showCalendar = () => {
    setCalendarVisibility(true);
    setTimeout(() => setCalendarVisibility(false), 0);
  };

  const onDayPress = day => {
    onDaySelection(day);
  };

  const onDateConfirmation = () => {
    setConfirmationWindowVisibility(true);
  };

  return (
    <ScrollView bounces={false}>
      <View style={[commonStyles.container, commonStyles.darkScreen]}>
        <SpecialistInfo />
        <AvailableServices />
        <Button onPress={showCalendar} title={'Show availability'} />
      </View>
      {isConfirmationWindowVisible &&
        Alert.alert(
          `Do you want to book place on ${selectedDate.dateString}?`,
          'We are waiting for you, gorgeous!',
          [
            {
              text: 'I need few minutes to think',
              onPress: () => {
                setConfirmationWindowVisibility(false);
                setCalendarVisibility(false);
              },
            },
            {
              text: "Yeees, I can't wait",
              onPress: () => {
                setConfirmationWindowVisibility(false);
                setCalendarVisibility(false);
              },
            },
          ],
          {cancelable: false},
        )}
      <DatePicker
        onDayPress={onDayPress}
        markedDates={
          selectedDate && {
            [selectedDate.dateString]: {
              selected: true,
              disableTouchEvent: true,
            },
          }
        }
        isCalendarVisible={isCalendarVisible}>
        <Button
          type={'buttonSmall'}
          title={'Confirm'}
          disabled={!selectedDate}
          onPress={onDateConfirmation}
        />
      </DatePicker>
    </ScrollView>
  );
};
