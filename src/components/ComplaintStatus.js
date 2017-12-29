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
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
export default class ComplaintStatus extends Component<{}> {
  state={ComplaintId:'',
  complaintDetails: [],status:0};
  setComplaintNumber(ComplaintId){
      this.setState({
        ComplaintId:ComplaintId
      })
    }

fetchComplaintStatus(ComplaintId)
{
  fetch(`http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id=${ComplaintId}`)
  .then(response => response.json()).then(data => this.setState({complaintDetails:data}));
  this.state.complaintDetails.map(ComplaintDetail => this.setState({status:ComplaintDetail.cp_status}))
alert(this.state.status)
return this.state.status;
}

    submitComplaintId(ComplaintId)
    {
        Keyboard.dismiss();
        var str="resolved";
       if(this.fetchComplaintStatus(ComplaintId)==1)
       {
           var str="Active";
           setTimeout(() => {Alert.alert(
             'Complaint status',
             'Complaint status is '+str,
             [
               {text:'Complaint details', onPress:()=>this.routeself(2,ComplaintId)},
               {text:'Home', onPress:()=>this.routeself(1)},
               {text:'Cancel', onPress:()=>this.routeself(0)},
             ],
           )},1000);
       }
       else if(  this.fetchComplaintStatus(ComplaintId)==0)
       {
      setTimeout(() => {Alert.alert(
        'Complaint status',
        'Complaint status is '+str,
        [
          {text:'Complaint details', onPress:()=>this.routeself(2,ComplaintId)},
          {text:'Home', onPress:()=>this.routeself(1)},
          {text:'Cancel', onPress:()=>this.routeself(0)},
        ],
      )},1000);
    }
    else {
      alert('Inavlid ticket number')
    }


    }
    routeself(input,ComplaintId)
    {
switch(input)
{
  case 1 : {Actions.Home(); break;}
  case 2 : {Actions.ComplaintDetails({ComplaintId:ComplaintId}); break;}
  case 0 : {Actions.ComplaintStatus(); break;}
}
    }
  render() {
    return (
  <ImageBackground source={require('../images/loginnBg.jpeg')} style={styles.container}>
  <TouchableOpacity  style={styles.logotouch} underlayColor='#000000' onPress={ ()=>{ Linking.openURL('http://wbdemo.in/kscpcr-v1.3/eng_ver/about-us.php')}} >
    <Image source={require('../images/l1.png')} style={styles.logo}/>
    </TouchableOpacity>
    <TouchableOpacity underlayColor='#000000'  style={styles.logotouch} >
    <Image source={require('../images/l2.png')} style={styles.logo}/>
    </TouchableOpacity>
  <TextInput placeholder='Enter complaint Number'
    placeholderTextColor='rgba(0,0,0,0)'
    style={styles.input}
    onChangeText={(text)=>this.setComplaintNumber(text)}/>
  <View style={styles.buttonContainer}>
  <Button color="#6E1307"
    title="Get status"
  onPress={()=>this.submitComplaintId(this.state.ComplaintId)}/>
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

}
});
