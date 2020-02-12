import {useState} from 'react';

export const useCalendar = () => {
  const [selectedDate, setSelectedDay] = useState(undefined);

  const onDaySelection = day => {
    setSelectedDay(day);
  };

  return {selectedDate, onDaySelection};
};
