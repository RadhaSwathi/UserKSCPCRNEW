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
var {height, width} = Dimensions.get('window')
export default class ChildDetails extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      CName:'',
      cGender:'',
      cAge:'',
      cIDMark:''
    }
  }

  UpdateComponeentVal(Value,num)
  {
    switch (num) {
      case 1:{ this.setState({CName:Value})
        break;
      }
      case 2:{ this.setState({cIDMark:Value})
        break;
      }
     default:

    }
  }
  setResults(results){
      alert(results.success)
    }
  SubmitAction()
  {
    console.log('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/admin_action.php?f=createComplaintp&cp_relationship='+this.props.Relationship+'&cp_name='+this.props.Name+'&cp_phone_no='+this.props.phno+'&cp_email_id='+this.props.email+
        '&cp_address='+this.props.address+'&cp_complaint_type='+this.props.complianttype+'&cp_district='+this.props.location+'&cp_compliant_details='+this.props.summary+'&cp_resp_name='+this.props.RName+'&cp_resp_phone_no='+this.props.Rphno+'&cp_resp_email_id='+this.props.Remail+'&cp_resp_address='+this.props.address +'&cd_name='+this.state.CName+
        '&cd_gender='+ this.state.cGender +'&cd_age='+ this.state.cAge +'&cd_indentification='+this.state.cIDMark)
    fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/admin_action.php?f=createComplaintp&cp_relationship='+this.props.Relationship+'&cp_name='+this.props.Name+'&cp_phone_no='+this.props.phno+'&cp_email_id='+this.props.email+
        '&cp_address='+this.props.address+'&cp_complaint_type='+this.props.complianttype+'&cp_district='+this.props.location+'&cp_compliant_details='+this.props.summary+'&cp_resp_name='+this.props.RName+'&cp_resp_phone_no='+this.props.Rphno+'&cp_resp_email_id='+this.props.Remail+'&cp_resp_address='+this.props.address +'&cd_name='+this.state.CName+
        '&cd_gender='+ this.state.cGender +'&cd_age='+ this.state.cAge +'&cd_indentification='+this.state.cIDMark ,{
        method:'POST'
  }).then((re)=>this.setResults(re))
}
componentWillMount()
{
  alert(this.props.RName+'*'+this.props.Rphno+'*'+this.props.Remail+'*'+
    this.props.Raddress+'*'+this.props.Relationship+'*'+this.props.Name+'*'+this.props.phno+'*'+this.props.email+
    this.props.address+'*'+this.props.complianttype+'*'+this.props.location+'*'+this.props.summary)
}

  render() {
    return (
  <View style={styles.container}>
  <ScrollView  style={styles.formstyle}>
<KeyboardAvoidingView behavior="padding" >


  <TextInput placeholder='Enter Child Name'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
     onChangeText={(text)=>this.UpdateComponeentVal(text,1)}
    onSubmitEditing={()=> this.ChildInfoInput.focus()}/>
    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.cGender}
      onValueChange={(itemValue, itemIndex) => this.setState({cGender: itemValue})}>
      <Picker.Item label="Select gender" value="0" />
			<Picker.Item  label="Male" value="Male"/>
			<Picker.Item  label="Female" value="Female"/>
			<Picker.Item  label="Others" value="Others"/>
    </Picker>

    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.cAge}
      onValueChange={(itemValue, itemIndex) => this.setState({cAge: itemValue})}>
      <Picker.Item label="Select Age" value="" />
      <Picker.Item  label="0" Select Age/>
												<Picker.Item  label="1" value="1" />
												<Picker.Item  label="2" value="2" />
												<Picker.Item  label="3" value="3" />
												<Picker.Item  label="4" value="4"/>
												<Picker.Item  label="5" value="5"/>
												<Picker.Item  label="6" value="6"/>
												<Picker.Item  label="7" value="7"/>
												<Picker.Item  label="8" value="8"/>
												<Picker.Item  label="9" value="9"/>
												<Picker.Item  label="10" value="10"/>
												<Picker.Item  label="11" value="11"/>
												<Picker.Item  label="12" value="12"/>
												<Picker.Item  label="13" value="13"/>
												<Picker.Item  label="14" value="14"/>
												<Picker.Item  label="15" value="15"/>
												<Picker.Item  label="16" value="16"/>
												<Picker.Item  label="17" value="17"/>
												<Picker.Item  label="18" value="18"/>
        </Picker>

    <TextInput placeholder='Enter child Identification'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    multiline={true}
    maxLength={150}
    ref={(input)=> this.ChildInfoInput =input}
     onChangeText={(text)=>this.UpdateComponeentVal(text,2)}
    onSubmitEditing={()=> this.ComplaintInput.focus()}/>
  </KeyboardAvoidingView>
      <View>
  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={()=>this.SubmitAction()}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>Submit</Text>
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
