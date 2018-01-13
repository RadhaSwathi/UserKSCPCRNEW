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
export default class ComplaintDetailsEditKan extends Component<{}> {


  constructor(props){
    super(props)
    this.currentRouteName='ComplaintDetailsEditKan';
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

      if(this.state.location!=''&&this.state.Relationship!=''&&this.state.Name!=''&&this.state.phno!=''&&this.state.email!=''&&this.state.address!=''&&this.state.complianttype!=''&&this.state.summary!=''&&this.state.OTPInputText!='')
      {
      Actions.RespondentDetailsKan({Relationship:this.state.Relationship,Name:this.state.Name,phno:this.state.phno,email:this.state.email,address:this.state.address,complianttype:this.state.complianttype,location:this.state.location,summary:this.state.summary,OTPInputText:this.state.OTPInputText})
    }
    else if(this.state.location==''&&this.state.Relationship==''&&this.state.Name==''&&this.state.phno==''&&this.state.email==''&&this.state.address==''&&this.state.complianttype==''&&this.state.summary==''&&this.state.OTPInputText==''){
      alert('ಎಲ್ಲಾ ವಿವರಗಳು ಕಡ್ಡಾಯವಾಗಿರುತ್ತವೆ')
    }
    else {
      var str=''
      if(this.state.location=='')
      str+='ಸ್ಥಳ,'
      if(this.state.Relationship=='')
      str+='ಸಂಬಂಧ,'
      if(this.state.Name=='')
      str+='ಹೆಸರು,'
      if(this.state.phno=='')
      str+='ಮೊಬೈಲ್ ನಂಬರ,'
      if(this.state.email=='')
      str+='ಇಮೇಲ್ ವಿಳಾಸ,'
      if(this.state.address=='')
    str+='ವಿಳಾಸ,'
      if(this.state.complianttype=='')
      str+='ದೂರು ವಿಧ,'
      if(this.state.summary=='')
      str+='ಸಾರಾಂಶ,'
      if(this.state.OTPInputText=='')
      str+='OTP'
      alert(str+' ಕಡ್ಡಾಯವಾಗಿದೆ')
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
  <Picker.Item label="ಸಂಬಂಧ" value="0" />
  <Picker.Item label="ತಂದೆ" value="1" />
  <Picker.Item label="ತಾಯಿ" value="2" />
  <Picker.Item label="ಸಂಬಂಧಿ" value="3" />
  <Picker.Item label="ಸ್ವತಃ" value="4" />
  <Picker.Item label="ಇತರರು" value="5" />
</Picker>

  <TextInput placeholder='ಹೆಸರು'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    autoCapitalize="none"
    autoCorrect={false}
     onChangeText={(text)=>this.UpdateComponeentVal(text,1)}
    onSubmitEditing={()=> this.phoneInput.focus()}/>

    <TextInput placeholder='ದೂರವಾಣಿ ಸಂಖ್ಯೆ'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    ref={(input)=> this.phoneInput =input}
     onChangeText={(text)=>this.UpdateComponeentVal(text,2)}
    onSubmitEditing={()=> this.EmailInput.focus()} />

    <TextInput placeholder='ಇಮೇಲ್ ವಿಳಾಸ'
    placeholderTextColor='#000000'
    returnKeyType="next"
    style={styles.textInputStyle}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    ref={(input)=> this.EmailInput =input}
     onChangeText={(text)=>this.UpdateComponeentVal(text,3)}
    onSubmitEditing={()=> this.AddressInput.focus()}/>

    <TextInput placeholder='ವಿಳಾಸ'
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
      selectedValue={this.state.complianttype}
      onValueChange={(itemValue, itemIndex) => this.setState({complianttype: itemValue})}>
          <Picker.Item value="0" label="ದೂರಿನ ಪ್ರಕಾರ" />
																														<Picker.Item value="1" label= "ಅಪಘಾತಗಳು" />
																														<Picker.Item value="2" label= "ಅಡಾಪ್ಷನ್" />
																														<Picker.Item value="3" label= "ಮಕ್ಕಳ ಕಂಡುಬಂದಿದೆ "/>
                                                            <Picker.Item value="4" label= "ಬಾಲಕಾರ್ಮಿಕ" />
																														<Picker.Item value="5" label= "ಮಕ್ಕಳ ಕಾಣೆಯಾಗಿದೆ "/>
																														<Picker.Item value="6" label= "ಬಾಲ್ಯ ವಿವಾಹ "/>
																														<Picker.Item value="7" label= "ಮಕ್ಕಳ ಕಳ್ಳಸಾಗಣೆ "/>
																														<Picker.Item value="8" label= "ಶಿಕ್ಷಣ" />
																														<Picker.Item value="9" label= "ಕಿಡ್ನ್ಯಾಪ್" />
																														<Picker.Item value="10" label= "ಶಾಲೆಯಿಂದ ಹೊರಹಾಕಲಾಗಿದೆ "/>
                                                            <Picker.Item value="11" label= "ದೈಹಿಕ ಶಿಕ್ಷೆ "/>
																														<Picker.Item value="12" label= "ವೇಶ್ಯಾವಾಟಿಕೆ" />
																														<Picker.Item value="13" label= "ತಾರತಮ್ಯ "/>
																														<Picker.Item value="14" label= "ಪಾಲನೆ ವಿಷಯಗಳು "/>
																														<Picker.Item value="15" label=" ದೈಹಿಕ ಕಿರುಕುಳ "/>
																														<Picker.Item value="16" label= "ಶಾಲೆಯಲ್ಲಿ ಮೂಲಸೌಕರ್ಯ "/>
																														<Picker.Item value="17" label= "ಶಾಲೆಯಿಂದ ಮುಕ್ತಾಯ "/>
																														<Picker.Item value="18" label= "ಭಿನ್ನಾಭಿಪ್ರಾಯದ ಮಕ್ಕಳ "/>
																														<Picker.Item value="19" label= "ಶಾಲೆಯಲ್ಲಿ ಸೌಲಭ್ಯಗಳು "/>
																														<Picker.Item value="20" label= "ಬೋಧನಾ ಶುಲ್ಕ "/>
                                                            <Picker.Item value="21" label= "ಮಧ್ಯಾಹ್ನ ಊಟ "/>
																														<Picker.Item value="22" label= "ಪ್ರವೇಶ ಸಂಬಂಧ" />
																														<Picker.Item value="23" label=  "ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಮಕ್ಕಳ ತಾರತಮ್ಯವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲಾಗಿದೆ " />
																														<Picker.Item value="24" label=" ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಸ್ಥಾನಗಳನ್ನು ನಿರಾಕರಿಸುವುದು " />
                                                            <Picker.Item value="25" label= "ಆರ್ ಟಿ ಇ ಅರ್ಜಿಯನ್ನು ತಿರಸ್ಕರಿಸುವುದು "/>
																														<Picker.Item value="26" label= "ಸೆಕ್ಸ್ ನಿರ್ಣಯ "/>
																														<Picker.Item value="27" label= "ಹೆಣ್ಣು ಭ್ರೂಣಹತ್ಯೆ "/>
																														<Picker.Item value="28" label= "ವೈದ್ಯಕೀಯ ಅಲಕ್ಷ್ಯ "/>
																														<Picker.Item value="29" label= "ಶಾಲೆಯ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ "/>
																														<Picker.Item value="30" label= "ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ಮೂಲಭೂತ ಸೌಕರ್ಯ "/>
																														<Picker.Item value="31" label= "ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ಮಧ್ಯಾಹ್ನ ಊಟ "/>
																														<Picker.Item value="32" label= "ಅಂಗನವಾಡಿ ಕೇಂದ್ರದ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ "/>
																														<Picker.Item value="33" label= "ಹಾಸ್ಟೆಲ್ನಲ್ಲಿನ ಮೂಲಸೌಕರ್ಯ "/>
																														<Picker.Item value="34" label= "ಆಹಾರದಲ್ಲಿ ಹಾಸ್ಟೆಲ್ "/>
																														<Picker.Item value="35" label=" ಹಾಸ್ಟೆಲ್ನಲ್ಲಿ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ "/>
																														<Picker.Item value="36" label= "ಬ್ಲ್ಯಾಕ್ಮ್ಯಾಜಿಕ್ "/>
																														<Picker.Item value="37" label=" ಪ್ರೋನೋಗ್ರಫಿ "/>
																														<Picker.Item value="38" label=" ಲೈಂಗಿಕ ಕಿರುಕುಳ" />
																														<Picker.Item value="39" label= "ಇತರರು" />


    </Picker>


    <Picker
      style={styles.textInputStyle}
      selectedValue={this.state.location}
      onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
      <Picker.Item label="ಸ್ಥಳ" value="" />
															<Picker.Item value="1" label="ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ" />
                                                            <Picker.Item value="2" label= "ಬೆಂಗಳೂರು" />
                                                            <Picker.Item value="3" label= "ಬಾಗಲಕೋಟೆ" />
                                                            <Picker.Item value="4" label= "ಬೆಳಗಾವಿ" />
                                                            <Picker.Item value="5" label= "ಬಿಜಾಪುರ" />
                                                            <Picker.Item value="6" label= "ಬೀದರ್" />
                                                            <Picker.Item value="7" label= "ಬಳ್ಳಾರಿ" />
                                                            <Picker.Item value="8" label= "ಚಾಮರಾಜ್ನಗರ" />
                                                            <Picker.Item value="9" label= "ಚಿಕ್ಕಬಳ್ಳಪುರ" />
                                                            <Picker.Item value="10" label= "ಚಿತ್ರದುರ್ಗ" />
                                                            <Picker.Item value="11" label= "ಚಿಕ್ಕಮಂಗಳೂರು" />
                                                            <Picker.Item value="12" label= "ದಾವಣಗೆರೆ" />
                                                            <Picker.Item value="13" label= "ಧಾರವಾಡ" />
                                                            <Picker.Item value="14" label= "ಗುಲ್ಬರ್ಗಾ" />
                                                            <Picker.Item value="15" label= "ಗದಗ" />
                                                            <Picker.Item value="16" label= "ಹಾಸನ" />
                                                            <Picker.Item value="17" label= "ಹಾವೇರಿ" />
                                                            <Picker.Item value="18" label= "ಕಾರ್ವಾರ್" />
                                                            <Picker.Item value="19" label= "ಕೋಲಾರ್" />
                                                            <Picker.Item value="20" label= "ಕೊಪ್ಪಳ" />
                                                            <Picker.Item value="21" label= "ಮಂಡ್ಯ" />
                                                            <Picker.Item value="22" label= "ಮೈಸೂರು" />
                                                            <Picker.Item value="23" label= "ಮಡಿಕೇರಿ" />
                                                            <Picker.Item value="24" label= "ಮಂಗಳೂರು" />
                                                            <Picker.Item value="25" label= "ರಾಯಚೂರು" />
                                                            <Picker.Item value="26" label= "ರಾಮನಗರ" />
                                                            <Picker.Item value="27" label= "ಶಿವಮೊಗ್ಗಾ" />
                                                            <Picker.Item value="28" label= "ತುಮಕೂರು" />
                                                            <Picker.Item value="29" label= "ಉಡುಪಿ" />
                                                            <Picker.Item value="30" label= "ಯಾದಗಿರಿ" />
                                                            <Picker.Item value="31" label=""  />
    </Picker>
    <TextInput placeholder='ದೂರಿನ ಸಾರಾಂಶ'
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
    <TextInput placeholder='otp ಅನ್ನು ನಮೂದಿಸಿ'
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
  <Text   style={styles.btntextInputStyle}>ಮುಂದುವರಿಸಲು</Text>
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
