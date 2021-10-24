import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'


const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color="#aaa" />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 72,
    margin: 5
  },
})