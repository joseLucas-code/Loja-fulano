import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getProductsByCategoryId } from '@/services/product';
import { getCategoryByID } from '@/services/caterogy';
import ProductsList from '@/components/ProductsList';
import { containerStyle } from '@/styles/global';

const CategoryById = () => {
  const { categoryID } = useLocalSearchParams();
  const products = getProductsByCategoryId(Number(categoryID));
  const category = getCategoryByID(Number(categoryID));
  return (
    <>
      <Stack.Screen options={{ title: category?.title }} />
      <View style={containerStyle}>
        <ProductsList data={products} />
      </View>
    </>
  );
};

export default CategoryById;

const styles = StyleSheet.create({});
