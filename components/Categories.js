import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 1'
      />
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 2'
      />
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 3'
      />
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 4'
      />
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 5'
      />
      <CategoryCard
        imgUrl='https://picsum.photos/600'
        title='Testing 6'
      />
    </ScrollView>
  );
};

export default Categories;