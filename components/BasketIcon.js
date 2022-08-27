import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';


const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  );
};

export default BasketIcon;