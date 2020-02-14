import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {fonts} from '../../../../framework/ui/fonts';
import {availableServices} from './mockedData';

export const AvailableServices = () => {
  const [availableServicesList, setAvailableServices] = useState(
    availableServices,
  );
  const [totalDuration, setTotalDuration] = useState(0);

  const renderService = item => {
    const serviceStyle = item.isSelected
      ? [styles.availableService, styles.availableServiceSelected]
      : styles.availableService;

    return (
      <TouchableOpacity
        style={serviceStyle}
        onPress={() => selectService(item)}>
        <Image />
        <Text style={styles.availableServicesName}>{item.name}</Text>
        <Text style={fonts.textHalfOpacity}>{item.duration}</Text>
      </TouchableOpacity>
    );
  };

  const selectService = item => {
    const selectionList = availableServicesList.map(service => {
      if (service.id === item.id) {
        const serviceDuration = !item.isSelected
          ? totalDuration + +service.duration
          : totalDuration - +service.duration;
        setTotalDuration(serviceDuration);

        return {
          ...service,
          isSelected: !service.isSelected,
        };
      }
      return service;
    });

    setAvailableServices(selectionList);
  };

  return (
    <View style={styles.availableServices}>
      <Text style={[fonts.mediumTitle, fonts.titleWhite]}>Choose services</Text>
      <View style={styles.availableServicesGrid}>
        {availableServicesList.map(item => {
          return renderService(item);
        })}
      </View>
      {
        <Text style={[fonts.smallTitle, fonts.titleWhite, styles.duration]}>
          Duration of visit: {totalDuration} min
        </Text>
      }
    </View>
  );
};
