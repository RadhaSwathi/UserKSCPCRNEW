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
export default class ComplaintDetailsEdit extends Component<{}> {
  

  constructor(props){
    super(props)
    state:{
      Relationship:''
      Name:''
      phno:''
      email:''
      address:''
      complianttype:''
      location:''
      summary:''
      locations:[]
      ctypes:[]
    }
}
    //state={Relationship:'',Name:'',phno:'',email:'',address:'',complianttype:'',location:'',summary:'',locations:[],ctypes:[]};
    renderLocation()
    {
      fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_all_locations.php').then(response => response.json())
    .then(data => this.setState({ locations: data }));
    return  this.state.locations.map(lcnt =>   <Picker.Item label={lcnt.district_name} key={lcnt.district_id} value={lcnt.district_id} /> )

    }
    Complaintype()
    {
      fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_all_complaints.php').then(response => response.json())
    .then(data => this.setState({ ctypes: data }));
    return  this.state.ctypes.map(ctyp =>   <Picker.Item label={ctyp.ct_type} key={ctyp.ct_id} value={ctyp.ct_id} /> );

    }
  render() {
    return (
  <View style={styles.container}>
  <ScrollView  style={styles.formstyle}>
<KeyboardAvoidingView behavior="padding" >
<Picker
  style={styles.textInputStyle}
  selectedValue={this.state.Relationship}
  onValueChange={(itemValue, itemIndex) => this.setState({Relationship: itemValue})}>
  <Picker.Item label="Select Relationship" value="0" />
  <Picker.Item label="Father" value="1" />
  <Picker.Item label="Mother" value="2" />
  <Picker.Item label="Relative" value="3" />
  <Picker.Item label="Self" value="4" />
  <Picker.Item label="other" value="5" />
</Picker>

  <TextInput placeholder='Name'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={Name => this.setState({Name})}
    onSubmitEditing={()=> this.phoneInput.focus()}/>

    <TextInput placeholder='Phone Number'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    ref={(input)=> this.phoneInput =input}
      onChangeText={phno => this.setState({phno})}
    onSubmitEditing={()=> this.EmailInput.focus()} />

    <TextInput placeholder='email address'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    ref={(input)=> this.EmailInput =input}
    onSubmitEditing={()=> this.AddressInput.focus()}/>

    <TextInput placeholder='Address'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    multiline={true}
    maxLength={150}
    ref={(input)=> this.AddressInput =input}
    onSubmitEditing={()=> this.ComplaintInput.focus()}/>

    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.complainttype}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Select complaint type" value="" />
      {this.Complaintype()}
    </Picker>

    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.location}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Select location" value="" />
      {this.renderLocation()}
    </Picker>
    <TextInput placeholder='Complaint Summary'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    multiline={true}
    maxLength={150}
    ref={(input)=> this.ComplaintInput =input}/>
  </KeyboardAvoidingView>
<View style={{marginTop:20}}>
  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={Actions.RespondentDetails({name:this.state.Name,phno:this.state.phno})}
  underlayColor='#6E1307'>
  <Text   style={styles.btntextInputStyle}>Save and continue</Text>
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
