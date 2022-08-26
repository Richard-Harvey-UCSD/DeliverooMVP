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

      {/* CategoryCard */}
      <CategoryCard imgUrl='https://picsum.photos/600' title='Testing' />
      <CategoryCard imgUrl='https://picsum.photos/600' title='Testing' />
      <CategoryCard imgUrl='https://picsum.photos/600' title='Testing' />
    </ScrollView>
  );
};

export default Categories;