import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
  TouchableHighlight,
  Text,
  BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
export default class ConfirmMobileKan extends Component<{}> {


  constructor(props){
    super(props)
    this.currentRouteName='ConfirmMobileKan';
    this.backButtonListener = null;
      this.lastBackButtonPress = null;
    this.state={
    mobileNo:''
    }
}
UpdateComponeentVal(Value)
{
  this.setState({mobileNo:Value})
}

setResults(results){
    if(results.success==1)
    {
      alert('OTP ಯಶಸ್ವಿಯಾಗಿ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಕಳುಹಿಸಲಾಗಿದೆ. ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ OTP ಅನ್ನು ನಮೂದಿಸಿ')
      Actions.ComplaintDetailsEditKan()
    }
    else{
      alert('ಏನೋ ತಪ್ಪಾಗಿದೆ, ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ')
    }
  }
    generateOTP()
    {
      if(this.state.mobileNo!='')
      {
        if(this.state.mobileNo.length==10)
        {
        fetch('http://kscpcr.com/complaints/actions_android/admin_action.php?f=createComplaintOTP&mobile_no='+this.state.mobileNo).then(response => response.json())
      .then((re)=>this.setResults(re))
      .catch(function(e) {
  console.log("handled the error");
});
    }
      else{
        alert('ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ')
      }
    }
    else {
      alert('ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಕಡ್ಡಾಯವಾಗಿದೆ')
    }
    }


    componentDidMount() {
    this.backButtonListener=BackHandler.addEventListener('hardwareBackPress', () => {

                if (this.currentRouteName !== 'Main') {

    Actions.Home();
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
  <View style={styles.container}>
  <View  style={styles.formstyle}>
<KeyboardAvoidingView behavior="padding" >
<TextInput placeholder='ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ'
  placeholderTextColor='#000000'
  returnKeyType="next"
  style={styles.textInputStyle}
  autoCapitalize="none"
  autoCorrect={false}
   onChangeText={(text)=>this.UpdateComponeentVal(text)}
  />

  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={()=>this.generateOTP()}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>ಮೊಬೈಲ್ ನಂಬರನ್ನು ದೃಡೀಕರುಣಿಸಿ</Text>
  </TouchableHighlight>

  </KeyboardAvoidingView>
  </View>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    width: width,
    padding:20,
    backgroundColor:"#B73527",
    height:height
  },
  formstyle:{

backgroundColor:'#F1F1F1',
  borderRadius:3,
  },
  buttonContainer:{
  paddingVertical:15,
  marginBottom:10,
  opacity:20,
},
textInputStyle:{
  color:'#000000',
  padding:10,
},
ButtonStyle:{
  margin:10,
alignItems:'center',
backgroundColor:'#6E1307',
},
btntextInputStyle:{
  color:'#FFFFFF',
  padding:10,
},
});
