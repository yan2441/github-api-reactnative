import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Divider, TextInput } from 'react-native-paper';
import AppView from '../components/AppView';
import { MaterialIcons } from "@expo/vector-icons"
import UserCard from '../components/UserCard';
const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState('')

  const data = [
    {
      id: 1,
      title: 'name1',
      subtitle: "sub1"
    },
    {
      id: 2,
      title: 'name2',
      subtitle: "sub1"
    },
    {
      id: 3,
      title: 'name3',
      subtitle: "sub1"
    }
  ]



  return (
    <AppView >
      {/* search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          label="Search"
          placeholder="Search for Github user"
          style={styles.searchBar}
          onChangeText={text => setText(text)}
          right={
            <TextInput.Icon
              icon={() => <MaterialIcons name="search" size={30} />}
              onPress={() => navigation.navigate("profile")}
            />
          }
        />
      </View>
      {/* flat list (search result) */}
      <View style={styles.resultContainer}>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard item={item} navigation={navigation} />
          )}
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
  resultContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  searchBar: {
    width: "100%",
  }
})