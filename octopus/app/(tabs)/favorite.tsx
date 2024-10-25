
import { StyleSheet, View, Text } from 'react-native';
import { Layout } from '../../src/components/Layout';

export default function FavoriteScreen() {
  return (
   <Layout><Text>Favorite here</Text></Layout>
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
