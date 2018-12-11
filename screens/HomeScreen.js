import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { intervalId: null };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  changeLightState(parameters){
    return fetch('http://192.168.8.100/api/ip-RXKvu2xwaFV1LI4FsNHFXfaJJOU-oehXhQlKN/lights/3/state', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parameters),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  setNormal = () => {
    clearInterval(this.state.intervalId);
    this.changeLightState({
      "on": true,
      "bri": 254,
      "hue": 8595,
      "sat": 121,
      "effect": "none",
      "xy": [
        0.4452,
        0.4068
      ],
      "ct": 346,
      "alert": "none",
      "colormode": "ct",
      "mode": "homeautomation",
      "reachable": true
    });
  }

  setRandom = () => {
    clearInterval(this.state.intervalId);
    this.changeLightState({
      "on": true,
      "bri": 254,
      "sat": 254,
      "effect": "none",
      "ct": 153,
      "alert": "none",
      "colormode": "xy",
      "mode": "homeautomation",
      "reachable": true
    });
    var intervalId = setInterval(()=>{
      const randomNumber = Math.floor(Math.random()*(4-1+1)+1);
      if(randomNumber % 4==0){
        this.setYellow();
      }else if(randomNumber % 3==0){
        this.setRed();
      }else if(randomNumber % 2==0){
        this.setGreen();
      }else{
        this.setBlue();
      }
      console.log('trying to call this!');
    }, 200);

    this.setState({intervalId: intervalId});
  }
  
  setBlue = () => {
    this.changeLightState({
      "hue": 45904,
      "xy": [
        0.1541,
        0.084
      ],
    });
  }

  setGreen = () => {
    this.changeLightState({
      "hue": 24432,
      "xy": [
        0.1938,
        0.6821
      ],
    });
  }

  setYellow = () => {
    this.changeLightState({
      "hue": 24432,
      "xy": [
        0.4862,
        0.4791
      ],
    });
  }

  setRed = () => {
    this.changeLightState({
      "hue": 63772,
      "xy": [
        0.64,
        0.2833
      ],
    });
  }

  turnOff = () => {
    clearInterval(this.state.intervalId);
    this.changeLightState({"on": false})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Hey denne app del kan lave farver! :- )
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.setNormal} style={styles.button}><Text style={styles.buttonText}>Tænd</Text></TouchableOpacity>
              <TouchableOpacity onPress={this.setRandom} style={styles.button}><Text style={styles.buttonText}>Regnbuer</Text></TouchableOpacity>
              <TouchableOpacity onPress={this.turnOff} style={styles.button}><Text style={styles.buttonText}>Sluk</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#6d088e'
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20
  },
  button:{
    paddingVertical:20,
    paddingHorizontal:30,
    backgroundColor:'#4a0660',
    borderRadius:5,
    margin: 5 
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'center',
  }
});
