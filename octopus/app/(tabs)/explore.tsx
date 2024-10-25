import { Layout } from '@/src/components/Layout';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
   <Layout><Text>Explore here</Text></Layout>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
