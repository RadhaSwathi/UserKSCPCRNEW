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
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
var LogoWidth = (width/4 +50)
var Logoheight = (height/4 -16)

export default class Home extends Component<{}> {
  render() {
    return (
  <ImageBackground source={require('../images/loginnBg.jpeg')} style={styles.container}>
<TouchableOpacity  style={styles.logotouch} underlayColor='#000000' onPress={ ()=>{ Linking.openURL('http://wbdemo.in/kscpcr-v1.3/eng_ver/about-us.php')}} >
  <Image source={require('../images/l1.png')} style={styles.logo}/>
  </TouchableOpacity>
  <TouchableOpacity underlayColor='#000000'  style={styles.logotouch} >
  <Image source={require('../images/l2.png')} style={styles.logo}/>
  </TouchableOpacity>
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
  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="Register new complaint"
  onPress={Actions.ComplaintDetailsEdit}/>
    </View>
  </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height:height
  },
  buttonContainer:{
    borderRadius:8,
  paddingVertical:15,
  marginLeft:25,
  marginRight:25,
  marginBottom:0,
  shadowColor:'#d9d9d9',
  shadowRadius:6,
  shadowOffset:{width:5,height:5,}
},
WelcomText:{
fontSize:18,
fontWeight:'bold',
textAlign:'center',
color:'#000000',
    justifyContent:'center',
},
WelcomTexts:{
fontSize:15,
fontWeight:'bold',
textAlign:'center',
color:'#000000',
    justifyContent:'center',
},
textContent:{
  marginBottom:90
},
logo:{
  height:100,
  width:100,
  marginTop:10,
  paddingVertical:0,
  opacity:80,
  resizeMode:'contain',
  shadowColor:'#000',
  shadowRadius:6,
  shadowOpacity:0.8,
  shadowOffset:{width:0,height:2,},
},
logotouch:{
  height:120,
  width:120,
  shadowColor:'#000',
  shadowRadius:6,
  shadowOpacity:0.8,
  shadowOffset:{width:0,height:2,},
  marginTop:10,
  paddingVertical:0,
  opacity:80,

}
});
