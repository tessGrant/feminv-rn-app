import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>
        This screen doesn't exist.
        </Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
