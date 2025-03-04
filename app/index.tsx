import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => console.log('touch')}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
