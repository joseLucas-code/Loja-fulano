import { StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { getProductById } from '@/services/product';
import { containerStyle } from '@/styles/global';

const product = () => {
  const { id } = useLocalSearchParams();
  const product = getProductById(+id);
  if (!product)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Produto Não encontrado</Text>
      </View>
    );
  return (
    <>
      <Stack.Screen options={{ title: `Produto:  ${product.title}` }} />
      <View style={styles.container}>
        <Image source={product.image} contentFit="contain" style={styles.img} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>
          {product.price.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </Text>
      </View>
    </>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
    gap: 12,
  },
  img: {
    width: '100%',
    height: 300,
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
