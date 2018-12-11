import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class TeamBlueScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>{'Hey, det her er jeres første tekst - prøv at finde mig i TeamBlueScreen.js!'}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF"
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#004DE2'
  },
});
