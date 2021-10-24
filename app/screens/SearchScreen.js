import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { Divider, TextInput } from 'react-native-paper';
import AppView from '../components/AppView';
import { MaterialIcons } from "@expo/vector-icons"
import UserCard from '../components/UserCard';
import api from "../api/client";
import Loader from '../components/Loader';


const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [userData, setUserData] = useState([])


  const handleSearch = async (query) => {
    setPage(1)
    setUserData([])
    const response = await api.getUsers(query)
    const { items } = response.data
    setUserData(items);
  }

  const handleLoadMore = async (query) => {
    setPage(page + 1)
    const response = await api.getMoreUsers(query, page)
    const { items } = response.data
    setUserData([...userData, ...items]);
  }

  return (
    <AppView >
      {/* search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          mode="outlined"
          label="Search"
          placeholder="Search for Github user"
          style={styles.searchBar}
          onChangeText={query => setQuery(query)}
          right={
            <TextInput.Icon
              icon={() => <MaterialIcons name="search" size={30} />}
              onPress={() => handleSearch(query)}
            />
          }
        />
      </View>
      {/* flat list (search result) */}
      <View style={styles.resultContainer}>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={userData}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            console.log(page)
            handleLoadMore(query, page)
          }}
          onEndReachedThreshold={1}
          ListFooterComponent={Loader}
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
    paddingHorizontal: 10,
    paddingBottom: 40
  },
  searchBar: {
    width: "100%",
    padding: 0
  }
})