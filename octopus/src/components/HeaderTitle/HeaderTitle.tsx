import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderTextProps {
    title: string;
}
export const HeaderTitle = ({title}: HeaderTextProps) => {

  const staticText = useMemo(()=> {
    return title ?? ''
  }, [title]);

  return (
    <View style={styles.container} accessibilityRole="header">
      <Text style={styles.text} testID="header-title-text">{staticText}</Text>
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