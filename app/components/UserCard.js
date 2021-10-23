import React from 'react';
import { StyleSheet } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons"


const UserCard = ({ item, navigation }) => {

  return (
    <TouchableRipple onPress={() => { navigation.navigate("profile") }}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        left={(props) => <Avatar.Icon  {...props} icon="folder" />}
        right={(props) =>
          <MaterialIcons
            {...props}
            name="arrow-forward-ios"
            size={20}
            onPress={() => { navigation.navigate("profile") }}
          />}
      />
    </TouchableRipple>
  )
}

export default UserCard

const styles = StyleSheet.create({
  container: {},
})