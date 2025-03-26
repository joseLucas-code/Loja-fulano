import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Product } from '@/types/product';
import ProductItem from './ProductItem';

type DataProps = {
  data: Product[];
};

const ProductsList = ({ data }: DataProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductItem products={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
