import {useState} from 'react';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  return {searchValue, handleSearchChange};
};
