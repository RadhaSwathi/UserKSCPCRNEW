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
export default class RespondentDetailsKan extends Component<{}> {
  constructor(props){
    super(props)
    this.currentRouteName='RespondentDetailsKan';
    this.backButtonListener = null;
      this.lastBackButtonPress = null;
    this.state={
      RName:'',
      Rphno:'',
      Remail:'',
      Raddress:''
    }
}

componentDidMount() {

this.backButtonListener=BackHandler.addEventListener('hardwareBackPress', () => {

            if (this.currentRouteName !== 'Main') {

Actions.popTo('ComplaintDetailsEditKan');
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

     UpdateComponeentVal(Value,num)
     {
       switch (num) {
         case 1:{ this.setState({RName:Value})
           break;
         }
         case 2:{ this.setState({Rphno:Value})
           break;
         }
         case 3:{ this.setState({Remail:Value})
           break;
         }
         case 4:{ this.setState({Raddress:Value})
           break;
         }
        default:

       }
     }
gotoChildDetails()
{
  if(this.state.RName!=''&&this.state.Rphno!=''&&this.state.Remail!=''&&this.state.Raddress!='')
  {
    Actions.ChildDetailsKan({RName:this.state.RName,Rphno:this.state.Rphno,Remail:this.state.Remail,
      Raddress:this.state.Raddress,Relationship:this.props.Relationship,Name:this.props.Name,phno:this.props.phno,email:this.props.email,
      address:this.props.address,complianttype:this.props.complianttype,location:this.props.location,summary:this.props.summary,OTPInputText:this.props.OTPInputText})
    }
    else {
      var str='ಎದುರಾಳಿಯ'
        if(this.state.RName==''&&this.state.Rphno==''&&this.state.Remail==''&&this.state.Raddress=='')
        {
          alert('ಎಲ್ಲಾ ವಿವರಗಳು ಕಡ್ಡಾಯವಾಗಿರುತ್ತವೆ')
        }
        else{
        if(this.state.RName=='')
        str+=' ಹೆಸರು,'
        if(this.state.Rphno=='')
        str+=' ದೂರವಾಣಿ ಸಂಖ್,'
        if(this.state.Remail=='')
        str+=' ಇಮೇಲ್ ವಿಳಾಸ,'
        if(this.state.Raddress=='')
        str+=' ವಿಳಾಸ'
        alert(str+' ಕಡ್ಡಾಯವಾಗಿದೆ')
      }
    }
}

  render() {
    return (
  <View style={styles.container}>
  <ScrollView  style={styles.formstyle}>
<KeyboardAvoidingView behavior="padding" >


  <TextInput placeholder='ಎದುರಾಳಿಯ ಹೆಸರು'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={(text)=>this.UpdateComponeentVal(text,1)}
    onSubmitEditing={()=> this.phoneInput.focus()}/>

    <TextInput placeholder='ಎದುರಾಳಿಯ ದೂರವಾಣಿ ಸಂಖ್ಯೆ'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
ref={(input)=> this.phoneInput =input}
onChangeText={(text)=>this.UpdateComponeentVal(text,2)}
onSubmitEditing={()=> this.EmailInput.focus()} />

    <TextInput placeholder='ಎದುರಾಳಿಯ ಇಮೇಲ್ ವಿಳಾಸ'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    ref={(input)=> this.EmailInput =input}
    onChangeText={(text)=>this.UpdateComponeentVal(text,3)}
    onSubmitEditing={()=> this.AddressInput.focus()}/>

    <TextInput placeholder='ಎದುರಾಳಿಯ ವಿಳಾಸ'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    multiline={true}
    maxLength={150}
    ref={(input)=> this.AddressInput =input}
    onChangeText={(text)=>this.UpdateComponeentVal(text,4)}
    onSubmitEditing={()=> this.ComplaintInput.focus()}/>
  </KeyboardAvoidingView>
<View style={{marginTop:20}}>
  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={()=>this.gotoChildDetails()}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>ಮುಂದುವರಿಸಲು</Text>
  </TouchableHighlight>

  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.ComplaintDetailsEditKan}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>ಹಿಂದಿನ ಪುಟಕ್ಕೆ</Text>
  </TouchableHighlight>

  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.HomeKan}
   underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>ರದ್ದುಪಡಿಸಲು</Text>
  </TouchableHighlight>
  </View>
  </ScrollView>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignSelf: 'stretch',
    width: width,
    padding:20,
    backgroundColor:"#B73527",
    height:height

  },
  formstyle:{
marginTop:0,
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
