import {useState} from 'react';

export const useSearch = (array) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  const filteredArray = array.filter(item => {
    return (
      item.specialist.includes(searchValue) ||
      item.procedure.includes(searchValue)
    );
  });

  return {searchValue, handleSearchChange, filteredArray};
};
