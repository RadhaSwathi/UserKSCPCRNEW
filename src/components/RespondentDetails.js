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
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class RespondentDetails extends Component<{}> {
    state={language:''};
    componentWillMount()
    {
      alert(this.props.Name+this.props.phno)
    }
  render() {
    return (
  <View style={styles.container}>
  <ScrollView  style={styles.formstyle}>
<KeyboardAvoidingView behavior="padding" >


  <TextInput placeholder='Respondent Name'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    onSubmitEditing={()=> this.phoneInput.focus()}/>

    <TextInput placeholder='Respondent Phone Number'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
ref={(input)=> this.phoneInput =input}
onSubmitEditing={()=> this.EmailInput.focus()} />

    <TextInput placeholder='Respondent email address'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    ref={(input)=> this.EmailInput =input}
    onSubmitEditing={()=> this.AddressInput.focus()}/>

    <TextInput placeholder='RespondentAddress'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    multiline={true}
    maxLength={150}
    ref={(input)=> this.AddressInput =input}
    onSubmitEditing={()=> this.ComplaintInput.focus()}/>
  </KeyboardAvoidingView>
<View style={{marginTop:20}}>
  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.ChildDetails}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>Save and continue</Text>
  </TouchableHighlight>

  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.ComplaintDetailsEdit}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>Previous</Text>
  </TouchableHighlight>

  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.Home}
   underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>Cancel</Text>
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
    width: null,
    padding:20,
    backgroundColor:"#B73527",

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
