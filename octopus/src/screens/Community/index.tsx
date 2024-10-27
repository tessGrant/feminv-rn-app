import { Feed } from '@/components/Feed'
import { View } from 'react-native'
import { styles } from './styles'
import { HeaderTitle } from '@/components/HeaderTitle'

export const Community = () => {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.titleContainer}>
      <HeaderTitle title={'Community Feed'} />
      </View>
      <Feed />
    </View>
  )
}
