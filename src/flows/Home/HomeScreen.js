import React from 'react';
import {Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import {fonts} from '../../framework/ui/fonts';
import {commonStyles} from '../../framework/ui/styles';
import {TextField} from '../../framework/ui/components';
import {Filters} from './components';
import {useSearch} from './hooks/useSearch';
import {LastBookedItem} from './components/LastBookedItem/LastBookedItem';
import {lastBooked} from './lastBooked';
import {styles} from './styles';

export const HomeScreen = ({navigation: {navigate}}) => {
  const {searchValue, handleSearchChange, filteredArray} = useSearch(
    lastBooked,
  );

  const renderEmptyList = () => <Text>Nothing found😔 Try to search anything else...</Text>;

  return (
    <SafeAreaView>
      <ScrollView style={commonStyles.container}>
        <Text style={fonts.title}>Find service 💄</Text>
        <TextField
          type={'search'}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={'Search for services...'}
        />
        <Filters />
        <Text style={fonts.mediumTitle}>We recommend:</Text>
        <FlatList
          data={filteredArray}
          ListEmptyComponent={renderEmptyList()}
          contentContainerStyle={styles.listBottomPadding}
          renderItem={(item, index) => (
            <LastBookedItem
              item={item.item}
              navigate={navigate}
              index={index}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
