import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>serch screen</Text>
      <Button title="go to profile" onPress={() => navigation.navigate("profile")}></Button>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {},
})