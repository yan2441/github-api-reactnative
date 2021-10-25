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
  const [page, setPage] = useState(1)
  const [userData, setUserData] = useState([])


  const handleSearch = async () => {
    //clear the user data on new search
    setUserData([])
    //get the new search response the store it to display it 
    const response = await api.getUsers(query)
    const { items } = response.data
    setUserData(items);
  }

  const handleLoadMore = async () => {
    //incriminate the page number to load more data
    setPage(page + 1)
    //get the additional data and add it with existing one to display it
    const response = await api.getUsers(query, page)
    const { items } = response.data
    const newData = [...userData, ...items]
    setUserData(newData);
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
              icon={() => <MaterialIcons color="white" name="search" size={30} />}
              onPress={handleSearch}
            />
          }
        />
      </View>
      {/* flat list (search result) */}
      <View style={styles.resultContainer}>
        <FlatList
          ItemSeparatorComponent={Divider}
          //maxToRenderPerBatch={10}
          keyExtractor={(item, index) => index.toString()}
          data={userData}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.25}
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