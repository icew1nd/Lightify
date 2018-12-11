import React from 'react';
import { ScrollView, View, StyleSheet, Text, Button, Image} from 'react-native';

export default class TeamRedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  startTryk = () => {
    alert('Are you 18 years old?');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textHeader}>{'TEAM RED'}</Text>
        <Text style={styles.textStyle}>{'Hey, vi er klart bedst. Blue team kan intet.'}</Text>
        <Button onPress={this.startTryk} title={'SANTA BUTTON'}></Button>
        <Button
          title='Press here for a Merry Christmas'
        />
        <View style={{alignItems: 'center' }}>
        <Image 
        style={{width: 75, height: 75}}
      
        source={require('../assets/images/CoolSanta-48x48.png')} 
        // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: "10%",
    marginTop: "6%"
  },
  textHeader: {
    color: "#336600",
    fontSize: 50,
    fontWeight: "500",
    textAlign: "center"
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#FF0000'
  },
  // ButtonStyle: {
  // onPress={onPressLearnMore},
  // title="Learn More",
  // color="#841584",
  // accessibilityLabel="Learn more about this purple button"
  // }
})