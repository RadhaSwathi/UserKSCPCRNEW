/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions
} from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
export default class ComplaintDetails extends Component<{}> {
state={complaintDetails: []};
  componentWillMount()
    {
      alert(this.props.ComplaintId)
      fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id='+this.props.ComplaintId)
      .then(response => response.json()).then(data => this.setState({complaintDetails:data}));

    }
    fetchRelationship()
    {

    }
    renderCompliantdetails()
    {
        return  this.state.complaintDetails.map(ComplaintDetail =>
          <ScrollView key={ComplaintDetail.cp_id} >
          <View key={ComplaintDetail.cp_id} style={styles.detail}>
          <Text style={styles.detailText}>Complaint Id: {ComplaintDetail.cp_id}</Text>
          <Text style={styles.detailText}>Relationship: {ComplaintDetail.cp_relationship}</Text>
          <Text style={styles.detailText}>Name: {ComplaintDetail.cp_name}</Text>
          <Text style={styles.detailText}>Adress: {ComplaintDetail.cp_address}</Text>
          <Text style={styles.detailText}>Phone No: {ComplaintDetail.cp_phone_no}</Text>
          <Text style={styles.detailText}>Email Id: {ComplaintDetail.cp_email_id}</Text>
          <Text style={styles.detailText}>Respondant Name:  {ComplaintDetail.cp_resp_name}</Text>
          <Text style={styles.detailText}>Respondant Adress: {ComplaintDetail.cp_resp_address}</Text>
          <Text style={styles.detailText}>Respondant number: {ComplaintDetail.cp_resp_phone_no}</Text>
          <Text style={styles.detailText}>Respondant Email id: {ComplaintDetail.cp_resp_email_id}</Text>
          <Text style={styles.detailText}>Complaint Type: {ComplaintDetail.cp_complaint_type}</Text>
          <Text style={styles.detailText}>District: {ComplaintDetail.cp_district}</Text>
          <Text style={styles.detailText}>Zone Id: {ComplaintDetail.cp_zone_id}</Text>
          <Text style={styles.detailText}>Complaint details: {ComplaintDetail.cp_compliant_details}</Text>
          <Text style={styles.detailText}>Submission date: {ComplaintDetail.cp_created_date}</Text>
        <Text style={styles.detailText}>Complaint Status: {ComplaintDetail.cp_status}</Text>
          <Text style={styles.detailText}>Is complaint Active: {ComplaintDetail.cp_isactive}</Text>
          <Button color="#6E1307" title="Go to Home" onPress= {Actions.Home}/>
          </View>
          </ScrollView>)
    }
  render() {
    return (

    <ImageBackground source={require('../images/KareBg.jpeg')} style={styles.container}>

            {this.renderCompliantdetails()}


                </ImageBackground>

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
    marginTop:10,
    height:height
  },
  logo:{
    justifyContent:'center',
    opacity:0.4,
    height:400
  },
detail:{
  flex: 1,
  justifyContent:'center',
  alignSelf: 'stretch',
  width: null,
  padding:20,
  opacity:2,
    elevation:10,
},
detailText:{
  color:'#000000',
  margin:2,
  borderColor:'#6E1307',
  borderWidth:1,
  padding:3,
  borderRadius:1,
  shadowColor:'#ff0000',
  shadowOffset:{width:5,height:5},
  shadowRadius:2,


}
});
