import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Product } from '@/types/product';
import { Link } from 'expo-router';

type ProductProps = {
  products: Product;
};

const ProductItem = ({ products }: ProductProps) => {
  return (
    <Link href={`/product/${products.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: products.image }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={{ flex: 1, gap: 6 }}>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.desc}>{products.description}</Text>
          </View>
          <Text style={styles.price}>
            {products.price.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            })}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginBottom: 24,
    flexDirection: 'row',
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 12,
  },
  content: {
    paddingVertical: 6,
    flexShrink: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  desc: {
    fontSize: 14,
    color: '#504f4f',
  },
  price: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },
});
