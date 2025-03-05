import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getAllCategories } from '@/services/caterogy';
import { Image } from 'expo-image';
import { containerStyle } from '@/styles/global';
import { Link } from 'expo-router';

const Categories = () => {
  const categories = getAllCategories();
  return (
    <>
      <View style={styles.container}>
        {categories.map((categorie) => (
          <Link href={`/categories/${categorie.id}`} key={categorie.id} asChild>
            <Pressable
              style={{ gap: 6 }}
              onPress={() => console.log(`/categories/${categorie.id}`)}
            >
              <Image
                source={categorie.cover}
                contentFit="fill"
                style={styles.img}
              />
              <Text style={styles.title}>{categorie.title}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
    gap: 24,
  },
  img: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
