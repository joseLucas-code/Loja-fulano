import Button from '@/components/Button';
import { Link } from 'expo-router';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 10, alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Loja de Fulano</Text>
        <Text style={{ fontSize: 14 }}>
          Aqui você encontra tudo oque precisa.
        </Text>
      </View>
      <Link replace href="/home" asChild>
        <Button>Começar as compras</Button>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  logo: {
    maxWidth: 250,
    maxHeight: 250,
  },
});
