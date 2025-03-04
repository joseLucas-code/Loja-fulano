import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('touch')}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}
