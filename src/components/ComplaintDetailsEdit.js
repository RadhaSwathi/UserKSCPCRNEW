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
export default class ComplaintDetailsEdit extends Component<{}> {


  constructor(props){
    super(props)
    this.currentRouteName='ComplaintDetailsEdit';
    this.backButtonListener = null;
      this.lastBackButtonPress = null;
    this.state={
      Relationship:'',
      Name:'',
      phno:'',
      email:'',
      address:'',
      complianttype:'',
      location:'',
      summary:'',
      locations:[],
      ctypes:[],
      OTPInputText:''
    }
}
    //state={Relationship:'',Name:'',phno:'',email:'',address:'',complianttype:'',location:'',summary:'',locations:[],ctypes:[]};
    UpdateComponeentVal(Value,num)
    {
      switch (num) {
        case 1:{ this.setState({Name:Value})
          break;
        }
        case 2:{ this.setState({phno:Value})
          break;
        }
        case 3:{ this.setState({email:Value})
          break;
        }
        case 4:{ this.setState({address:Value})
          break;
        }
        case 5:{ this.setState({summary:Value})
          break;
        }
        case 6:{ this.setState({OTPInputText:Value})
          break;
        }

        default:

      }
    }
    gotoRespondentDetails()
    {

      if(this.state.location!=''&&this.state.Relationship!=''&&this.state.Name!=''&&this.state.phno!=''&&this.state.email!=''&&this.state.address!=''&&this.state.complainttype!=''&&this.state.summary!=''&&this.state.OTPInputText!='')
      {
      Actions.RespondentDetails({Relationship:this.state.Relationship,Name:this.state.Name,phno:this.state.phno,email:this.state.email,address:this.state.address,complianttype:this.state.complainttype,location:this.state.location,summary:this.state.summary,OTPInputText:this.state.OTPInputText})
    }
    else if(this.state.location==''&&this.state.Relationship==''&&this.state.Name==''&&this.state.phno==''&&this.state.email==''&&this.state.address==''&&this.state.complainttype==''&&this.state.summary==''&&this.state.OTPInputText==''){
      alert('All fields are mandatory')
    }
    else {
      var str=''
      if(this.state.location=='')
      str+='Location,'
      if(this.state.Relationship=='')
      str+='Relationship,'
      if(this.state.Name=='')
      str+='Name,'
      if(this.state.phno=='')
      str+='Phone number,'
      if(this.state.email=='')
      str+='Email address,'
      if(this.state.address=='')
    str+='address,'
      if(this.state.complainttype=='')
      str+='complaint type,'
      if(this.state.summary=='')
      str+='summary,'
      if(this.state.OTPInputText=='')
      str+='OTP'
      alert(str+' are mandatory')
    }
    }
    renderLocation()
    {
  //    console.log("inside render")
  try{
      fetch('http://kscpcr.com/complaints/actions_android/fetch_all_locations.php').then(response => response.json())
    .then(data => this.setState({ locations: data }));
  }
    catch(e)
    {

    }
    //this.state.locations.map(lcnt =>  console.log(lcnt.district_name +'---->'+lcnt.district_id) )
    return  this.state.locations.map(lcnt =>   <Picker.Item label={lcnt.district_name} key={lcnt.district_id} value={lcnt.district_id} /> )

    }
    Complaintype()
    {
      try{
        fetch('http://kscpcr.com/complaints/actions_android/fetch_all_complaints.php').then(response => response.json())
      .then(data => this.setState({ ctypes: data }));
      return  this.state.ctypes.map(ctyp =>   <Picker.Item label={ctyp.ct_type} key={ctyp.ct_id} value={ctyp.ct_id} /> )
      }
      catch(e)
      {

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
     onChangeText={(text)=>this.UpdateComponeentVal(text,1)}
    onSubmitEditing={()=> this.phoneInput.focus()}/>

    <TextInput placeholder='Phone Number'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    ref={(input)=> this.phoneInput =input}
     onChangeText={(text)=>this.UpdateComponeentVal(text,2)}
    onSubmitEditing={()=> this.EmailInput.focus()} />

    <TextInput placeholder='email address'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    ref={(input)=> this.EmailInput =input}
     onChangeText={(text)=>this.UpdateComponeentVal(text,3)}
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
     onChangeText={(text)=>this.UpdateComponeentVal(text,4)}
    onSubmitEditing={()=> this.ComplaintInput.focus()}/>

    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.complainttype}
        onValueChange={(itemValue, itemIndex) => this.setState({complainttype: itemValue})}>
      <Picker.Item label="Select complaint type" value="" />
      {this.Complaintype()}
    </Picker>

    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.location}
      onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
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
     onChangeText={(text)=>this.UpdateComponeentVal(text,5)}
     onSubmitEditing={()=> this.OTPInput.focus()}
    ref={(input)=> this.ComplaintInput =input}/>
    <TextInput placeholder='Enter OTP'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
     onChangeText={(text)=>this.UpdateComponeentVal(text,6)}
    ref={(input)=> this.OTPInput =input}/>
  </KeyboardAvoidingView>
<View style={{marginTop:20}}>
  <TouchableHighlight
    style={styles.ButtonStyle}
  onPress={()=>this.gotoRespondentDetails()}
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
