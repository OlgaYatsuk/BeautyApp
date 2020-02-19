import {bookingsData} from '../mockedData/bookingsData';

const initialState = {
  bookings: bookingsData,
};

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_SERVICE':
      return {
        ...state,
        bookings: {
          ...state.bookings,
          ...action.service,
        },
      };

    case 'CANCEL_DATE':
      const dateToDelete = state.bookings.indexOf(action.service);

      return {
        ...state,
        bookings: {
          ...state.bookings.slice(0, dateToDelete),
          ...action.service,
          ...state.bookings.slice(dateToDelete + 1, state.bookings.length),
        },
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
