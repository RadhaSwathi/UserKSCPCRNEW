import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Image,
  TouchableOpacity,
  BackHandler,
  Linking
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
var LogoWidth = (width/4 +50)
var Logoheight = (height/4 -16)
var halfheight =( height/2-30)

export default class ComplaintStatusKan extends Component<{}> {

  constructor(props){
    super(props)
    this.currentRouteName='ComplaintStatusKan';
    this.backButtonListener = null;
      this.lastBackButtonPress = null;
    this.state={
      ComplaintId:'',
      status:'',
      complaintDetails:[],
    }
}
componentDidMount() {
this.backButtonListener=BackHandler.addEventListener('hardwareBackPress', () => {

            if (this.currentRouteName !== 'Main') {

Actions.pop();
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
  setComplaintNumber(ComplaintId){
      this.setState({
        ComplaintId:ComplaintId
      })
    }
    setSatus(status)
    {
      this.setState({
        status:status
      })
    }


async fetchComplaintStatus(ComplaintId)
{
try{
   const response= await fetch(`http://kscpcr.com/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id=${this.state.ComplaintId}`);
    const json=await response.json();
    const success = await json.success;

    if(success==undefined)
    {

  this.setSatus(json[0].cp_status)
  if(json[0].cp_status==1)
  {
           var str="Active";
    Alert.alert(
     'Complaint status',
     'Complaint status is Active',
     [
       {text:'ದೂರು ವಿವರ', onPress:()=>this.routeself(2,ComplaintId)},
       {text:'ಮುಖಪುಟ', onPress:()=>this.routeself(1)},
       {text:'ರದ್ದುಪಡಿಸಲು', onPress:()=>this.routeself(0)},
     ],
   )
  }
  else if(json[0].cp_status==0)
       {
  Alert.alert(
   'Complaint status',
   'Complaint status is Resolved',
   [
     {text:'ದೂರು ವಿವರ', onPress:()=>this.routeself(2,ComplaintId)},
     {text:'ಮುಖಪುಟ', onPress:()=>this.routeself(1)},
     {text:'ರದ್ದುಪಡಿಸಲು', onPress:()=>this.routeself(0)},
   ],
 )
    }
  }
    else {
alert("ಅಮಾನ್ಯವಾದ ದೂರಿನ ಸಂಖ್ಯೆ")
    }
}
catch(e)
{

}

}

    submitComplaintId(ComplaintId)
    {
        Keyboard.dismiss();
        var str='';
   this.fetchComplaintStatus(ComplaintId).done()

    }
    routeself(input,ComplaintId)
    {
switch(input)
{
  case 1 : {Actions.HomeKan(); break;}
  case 2 : {Actions.ComplaintDetailsKan({ComplaintId:ComplaintId}); break;}
  case 0 : {Actions.ComplaintStatusKan(); break;}
}
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
   <KeyboardAvoidingView behavior="padding">
  <TextInput placeholder='ದೂರು ಸಂಖ್ಯೆ ನಮೂದಿಸಿ'
    placeholderTextColor='#000000'
    style={styles.input}
    onChangeText={(text)=>this.setComplaintNumber(text)}/>

  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="ದೂರು ಸ್ಥಿತಿ ಪಡೆಯಲು"
  onPress={()=>this.submitComplaintId(this.state.ComplaintId)}/>
    </View>
    </KeyboardAvoidingView >
    </View>

  </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: width,
    paddingVertical:0,
    height:height
  },
  BodyContent :{
justifyContent:'center',
top:halfheight/4,

   },
  buttonContainer:{
    borderRadius:10,
  paddingVertical:15,
  marginLeft:25,
  marginRight:25,
  marginBottom:0,
  shadowColor:'#d9d9d9',
  shadowRadius:6,
  shadowOffset:{width:5,height:5,}
},
input:{
  marginLeft:25,
  marginRight:25,
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
}
});
