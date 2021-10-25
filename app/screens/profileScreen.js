import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Divider, Headline } from 'react-native-paper';
import AppView from '../components/AppView';
import api from '../api/repos'
import RepoCard from '../components/repoCard';
import Loader from '../components/Loader';


const profileScreen = ({ navigation }) => {
  const route = useRoute();
  const { userDate } = route.params
  const [repos, setRepos] = useState([])

  const handleGetRepos = async () => {
    const response = await api.getRepo(userDate.login)
    const items = response.data
    setRepos(items);
  }

  useEffect(() => {
    handleGetRepos()
  }, [])

  return (
    <AppView>
      {/* user info */}
      <View style={styles.userContainer}>
        <Avatar.Image size={110} source={{ uri: userDate.avatar_url }} />
        <Headline>{userDate.login}</Headline>
      </View>

      <View style={styles.reposContainer}>
        {repos.length === 0 ? <Loader /> :
          <FlatList
            ItemSeparatorComponent={Divider}
            keyExtractor={(item, index) => index.toString()}
            data={repos}
            renderItem={({ item }) => (
              <RepoCard item={item} />
            )}
          />
        }
      </View>
    </AppView>
  )
}

export default profileScreen

const styles = StyleSheet.create({
  userContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "25%",
    backgroundColor: "#4f5b66"
  },
  reposContainer: {
    height: "75%"
  }
})