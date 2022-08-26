import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import RestaurantCard from './RestaurantCard';


const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg text-black'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' size={20} />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >

        {/* RestaurantCards... */}
        <RestaurantCard
          id={123}
          imgUrl='https://picsum.photos/600'
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test description'
          dishes={[]}
          long={20}
          lat={0}
        />

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;