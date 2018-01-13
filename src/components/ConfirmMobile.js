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
export default class ConfirmMobile extends Component<{}> {


  constructor(props){
    super(props)
    this.currentRouteName='ConfirmMobile';
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
      alert('OTP Successfully sent to mobile number. Please enter the OTP during registration.')
      Actions.ComplaintDetailsEdit()
    }
    else{
      alert('Something went wrong please try again!!')
    }
  }
    generateOTP()
    {
      if(this.state.mobileNo!='')
      {
        if(this.state.mobileNo.length==10)
        {
        fetch(`http://kscpcr.com/complaints/actions_android/admin_action.php?f=createComplaintOTP&mobile_no=${this.state.mobileNo}`).then(response => response.json())
      .then((re)=>this.setResults(re))
      .catch(function(e) {
  console.log("handled the error");
});
    }
      else{
        alert('Enter valid mobile number')
      }
    }
    else {
      alert('Mobile number is mandatory')
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
<TextInput placeholder='Enter mobile number'
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
  <Text   style={styles.btntextInputStyle}>Generate OTP</Text>
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
