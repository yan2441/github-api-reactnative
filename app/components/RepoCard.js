import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper';

const RepoCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.language}</Paragraph>
      </Card.Content>
    </View>
  )
}

export default RepoCard

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
})