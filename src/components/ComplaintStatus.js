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
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class ComplaintStatus extends Component<{}> {
  state={ComplaintId:'',
  complaintDetails: []};
  setComplaintNumber(ComplaintId){
      this.setState({
        ComplaintId:ComplaintId
      })
    }
    submitComplaintId(ComplaintId)
    {
      Keyboard.dismiss();

        fetch(`http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id=${ComplaintId}`)
        .then(response => response.json()).then(data => this.setState({complaintDetails:data}));
        var status;
        var str="resolved";
        this.state.complaintDetails.map(ComplaintDetail =>
    status=ComplaintDetail.cp_status)
    if(status==1)
    {
      str="Active"
    }

      Alert.alert(
        'Complaint status',
        'Complaint status is '+str,
        [
          {text:'Complaint details', onPress:()=>this.routeself(2,ComplaintId)},
          {text:'Home', onPress:()=>this.routeself(1)},
          {text:'Cancel', onPress:()=>this.routeself(0)},
        ],
      )


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
  <ImageBackground source={require('../images/LoginBg.jpeg')} style={styles.container}>
  <TextInput placeholder='Enter complaint Number'
    placeholderTextColor='rgba(255,255,255,255)'
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
    justifyContent:'center',
    alignSelf: 'stretch',
    width: null,
    paddingVertical:0,
  },
  buttonContainer:{
  paddingVertical:15,
  marginBottom:10
}
});
