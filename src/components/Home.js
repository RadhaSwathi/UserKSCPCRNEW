import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class Home extends Component<{}> {
  render() {
    return (
  <ImageBackground source={require('../images/LoginBg.jpeg')} style={styles.container}>
  <View>
      <StatusBar
      backgroundColor={'transparent'}
      translucent
      /></View>
  <View style={styles.textContent} >
  <Text style={styles.WelcomText}> Welcome to KSCPCR</Text>
  <Text style={styles.WelcomTexts}> Karnataka state  for protection of child rights </Text>
  </View>
  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="Check complaint status"
    onPress={Actions.ComplaintStatus}
  />
  </View>
  <Button color="#6E1307"
    title="Register new complaint"
  onPress={Actions.ComplaintDetailsEdit}/>
  </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignSelf: 'stretch',
    width: null,
  },
  buttonContainer:{
  paddingVertical:15,
  marginBottom:10
},
WelcomText:{
fontSize:18,
fontWeight:'bold',
textAlign:'center',
color:'#FFFFFF',
    justifyContent:'center',
},
WelcomTexts:{
fontSize:15,
fontWeight:'bold',
textAlign:'center',
color:'#FFFFFF',
    justifyContent:'center',
},
textContent:{
  marginBottom:70
}
});
