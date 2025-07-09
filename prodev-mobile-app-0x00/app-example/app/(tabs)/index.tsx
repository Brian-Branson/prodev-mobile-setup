import { View,  } from 'react-native';
import { Pressable, Text } from 'react-native';

export default function HomeTab() {
  return (
    <View style={{backgroundColor: 'Blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Homepage</Text>
      <Text>Explore the app!</Text>
      <Text>Enjoy your stay!</Text>
      <Pressable onPress={() => alert("pressed")}>
      <Text>Click Me</Text>
      </Pressable>
    </View>
  );
}
