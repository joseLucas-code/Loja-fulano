import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { containerStyle } from '@/styles/global';
import { getAllProducts } from '@/services/product';
import ProductItem from '@/components/ProductItem';

const Home = () => {
  return (
    <View style={containerStyle}>
      <FlatList
        data={getAllProducts()}
        renderItem={({ item }) => <ProductItem products={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
