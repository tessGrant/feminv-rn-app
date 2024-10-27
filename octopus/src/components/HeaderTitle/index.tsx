import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderTextProps {
    title: string;
}
export const HeaderTitle = ({title}: HeaderTextProps) => {
  const staticText = useMemo(()=>{
      if(title.length){
        return title;
      }
  }, [title]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{staticText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: '700'
  }
})
