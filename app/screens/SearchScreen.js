import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper';
import AppView from '../components/AppView';
import { MaterialIcons } from "@expo/vector-icons"
const SearchScreen = ({ navigation }) => {
  return (
    <AppView >
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          label="Search"
          placeholder="Search for Github user"
          style={styles.searchBar}
        />
        <IconButton
          icon={() => <MaterialIcons name="search" size={30} />}
          onPress={() => navigation.navigate("profile")}
        />
      </View>
    </AppView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },
  searchBar: {
    width: "90%",
  }
})