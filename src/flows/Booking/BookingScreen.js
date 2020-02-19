import React, {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {SpecialistInfo} from './сomponents/SpecialistInfo/SpecialistInfo';
import {commonStyles} from '../../framework/ui/styles';
import {AvailableServices} from './сomponents/AvailableServices';
import {Button, DatePicker} from '../../framework/ui/components';
import {useCalendar} from './hooks/useCalendar';
import {bookDate} from '../../framework/store/actions/bookDate';
import {connect} from 'react-redux';

const BookingScreen = ({bookings}) => {
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

  const getMarkedDates = () => {
    let formattedDates = {};

    for (let event of bookings) {
      formattedDates[event.date] = {disabled: true};
    }

    if (selectedDate) {
      formattedDates[selectedDate.dateString] = {
        selected: true,
        disableTouchEvent: true,
      };
    }

    return formattedDates;
  };

  const renderAlert = () =>
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
            bookDate({date: selectedDate.dateString});
            setConfirmationWindowVisibility(false);
            setCalendarVisibility(false);
          },
        },
      ],
      {cancelable: false},
    );

  return (
    <ScrollView bounces={false}>
      <View style={[commonStyles.container, commonStyles.darkScreen]}>
        <SpecialistInfo />
        <AvailableServices bookings={bookings} bookDate={bookDate()} />
        <Button
          onPress={showCalendar}
          title={'Show availability'}
          testID={'availability-btn'}
        />
      </View>
      {isConfirmationWindowVisible && renderAlert()}
      <DatePicker
        onDayPress={onDayPress}
        markedDates={getMarkedDates()}
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

export const mapStateToProps = state => {
  return {
    bookings: state.bookingsReducer.bookings,
  };
};

const mapDispatchToProps = {
  bookDate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingScreen);
