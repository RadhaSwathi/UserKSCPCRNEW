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
  Linking,
  BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
var LogoWidth = (width/4 +50)
var Logoheight = (height/4 -16)
var halfheight =( height/2-30)

export default class HomeKan extends Component<{}> {
  constructor(props){
    super(props)
    this.currentRouteName='Main';
    this.backButtonListener = null;
      this.lastBackButtonPress = null;

}
componentDidMount() {
this.backButtonListener=BackHandler.addEventListener('hardwareBackPress', () => {

            if (this.currentRouteName !== 'Main') {
return true;
            }

            if (this.lastBackButtonPress + 2000 >= new Date().getTime()) {
                BackHandler.exitApp();
                return true;
            }
            this.lastBackButtonPress = new Date().getTime();

            return true;
        });
    }
    componentWillUnmount() {
          this.backButtonListener.remove();
      }
  render() {
    return (
  <ImageBackground source={require('../../images/loginnBg.jpeg')} style={styles.container}>
  <View  style={styles.flexRowWrap}  >
  <View style={styles.imageLeft}>
<TouchableOpacity   underlayColor='#000000' onPress={ ()=>{ Linking.openURL('http://kscpcr.com')}} >
  <Image source={require('../../images/l1.png')} style={styles.logo}/>
  </TouchableOpacity>
     </View>
     <View style={styles.imageRight}>
  <TouchableOpacity underlayColor='#000000'   >
  <Image source={require('../../images/l2.png')} style={styles.logo}/>
  </TouchableOpacity>
  </View>
     </View>
     <View  style={styles.BodyContent} >
  <View style={styles.textContent} >
  <Text style={styles.WelcomText}> ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಕ್ಕಳ ಹಕ್ಕುಗಳ ರಕ್ಷಣಾ ಆಯೋಗಕ್ಕೆ  ಸ್ವಾಗತ  </Text>
  </View>
  <View  style={styles.flexRowWrap}  >
  <View style={styles.imageRight}>
  <TouchableOpacity underlayColor='#000000'   onPress={Actions.Home}>
  <Image source={require('../../images/English.jpeg')} style={styles.language}/>
  </TouchableOpacity>
  </View>
  </View>
  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="ದೂರು ಸ್ಥಿತಿ ಪರೀಕ್ಷಿಸಲು"
    onPress={Actions.ComplaintStatusKan}
  />
  </View>
  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="ದೂರು ದಾಖಲೆಗಾಗಿ"
  onPress={Actions.ConfirmMobileKan}/>
    </View>
    </View>
    <View  style={styles.flexRowWrapBottom}  >
       <View style={styles.imageRight}>
    <TouchableOpacity underlayColor='#000000'   >
    <Image source={require('../../images/UnicefLogo.jpeg')} style={styles.logo}/>
    </TouchableOpacity>
    </View>
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
  BodyContent :{
justifyContent:'center',
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
fontSize:20,
fontWeight:'bold',
textAlign:'center',
color:'#000000',
    justifyContent:'center',
},
WelcomTexts:{
fontSize:18,
fontWeight:'bold',
textAlign:'center',
color:'#000000',
    justifyContent:'center',
},
textContent:{
alignSelf:'center',
alignItems:'center'
},
logo:{
  height:100,
  width:100,
  marginTop:10,
  paddingVertical:0,
  opacity:80,
  resizeMode:'contain',
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
},
flexRowWrap: {
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:20,
},
flexRowWrapBottom: {
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:20,
  position:'absolute',
  bottom:0
},
imageRight:{
  flex:1,
  flexDirection: 'row',
  justifyContent:'flex-end',
  alignItems:'center',
},
imageLeft:{
  flex:1,
  flexDirection: 'row',
  justifyContent:'flex-start',
  alignItems:'center',
},
language:
{
height:80,
width:40,
resizeMode:'contain',

}

});
