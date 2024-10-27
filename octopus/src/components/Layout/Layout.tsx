import { StatusBar } from "expo-status-bar"
import { SafeAreaView, ScrollView} from "react-native"
import { LayoutProps } from "./types"
import { styles } from "./styles"


export const Layout = ({children}: LayoutProps) => { 
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>  
      {children}
      </ScrollView>
    <StatusBar style="dark" />
    </SafeAreaView>
  )
}
