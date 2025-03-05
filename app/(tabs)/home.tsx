import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { containerStyle } from '@/styles/global';
import { getAllProducts } from '@/services/product';
import ProductItem from '@/components/ProductItem';
import ProductsList from '@/components/ProductsList';

const Home = () => {
  return (
    <View style={containerStyle}>
      <ProductsList data={getAllProducts()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
