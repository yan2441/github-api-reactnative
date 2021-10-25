import React from 'react';
import { StyleSheet } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons"


const UserCard = ({ item, navigation }) => {

  return (
    <TouchableRipple onPress={() => {
      navigation.navigate("profile", { userDate: item })
    }}>
      <Card.Title
        title={item.login}
        left={(props) => <Avatar.Image {...props} source={{ uri: item.avatar_url }} />}
        right={(props) =>
          <MaterialIcons
            {...props}
            name="arrow-forward-ios"
            size={20}
            onPress={() => { navigation.navigate("profile", { userDate: item }) }}
          />}
      />
    </TouchableRipple>
  )
}

export default UserCard

const styles = StyleSheet.create({
  container: {},
})