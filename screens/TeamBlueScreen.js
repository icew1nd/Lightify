import React from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { green } from 'ansi-colors';

export default class TeamBlueScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerStyle}>{'Team Blue headline'}</Text>
        <Text style={styles.textStyle}>{'Hey, dette er  jeres første tekst - prøv at finde mig i TeamBlueScreen.js!'}</Text>
        <View style={styles.centerButton}>
        <View style={styles.buttonStyle}>
          <Button title='myButton' onPress={buttonClick}/>
        </View>
        </View>
      </ScrollView>
    );
  }
}

function buttonClick(){
  alert("hello tei")
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    margin:10,
  },
  headerStyle: {
    fontSize:70,
    margin:10,
    marginBottom:20,

    textAlign: "center",
    color: "#AAAAAA"
  },
  buttonStyle:{
    alignItems: 'center',
    borderRadius:10,
        width:160,
    backgroundColor: "#AAAAAA"
  },
  centerButton:{
    alignItems: 'center',
    textAlign: 'center',

  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#004DE2'
  },
});
