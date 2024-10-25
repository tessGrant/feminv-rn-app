import { StatusBar } from "expo-status-bar"
import { SafeAreaView, View} from "react-native"
import { LayoutProps } from "./types"
import { styles } from "./styles"


export const Layout = ({children}: LayoutProps) => { 
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>  
        {children}
        </View>
    <StatusBar style="dark" />
    </SafeAreaView>
  )
}
