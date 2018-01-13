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
  Dimensions,
  BackHandler
} from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
var {height, width} = Dimensions.get('window')
export default class ComplaintDetailsKan extends Component<{}> {
state={complaintDetails: []};
  componentWillMount()
    {
      fetch('http://kscpcr.com/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id='+this.props.ComplaintId)
      .then(response => response.json()).then(data => this.setState({complaintDetails:data}));
      this.currentRouteName='ComplaintDetailsEditKan';
      this.backButtonListener = null;
        this.lastBackButtonPress = null;
    }
    fetchRelationship(relationID)
    {
var rel=null;
        switch (relationID) {
          case "0":{rel=""; break; }
          case "1":{rel="ತಂದೆ";break;}
          case "2": {rel="ತಾಯಿ";break;}
          case "3":{rel=" ಸಂಬಂಧಿ";break;}
          case "4":{rel=" ಸ್ವತಃ";break;}
          case "5":{rel=" ಇತರರು";break;}
          default:

        }
        return "ಸಂಬಂಧ: "+ rel;
    }
    fetchcomplaintType(ComplaintTypeId)
    {
      var arrayofComplaintid=["",
																														"ಅಪಘಾತಗಳು",
																														"ಅಡಾಪ್ಷನ್",
																														"ಮಕ್ಕಳ ಕಂಡುಬಂದಿದೆ",
																														"ಬಾಲಕಾರ್ಮಿಕ",
																														"ಮಕ್ಕಳ ಕಾಣೆಯಾಗಿದೆ",
																														"ಬಾಲ್ಯ ವಿವಾಹ",
																														"ಮಕ್ಕಳ ಕಳ್ಳಸಾಗಣೆ",
																														"ಶಿಕ್ಷಣ",
																														"ಕಿಡ್ನ್ಯಾಪ್",
																														" ಶಾಲೆಯಿಂದ ಹೊರಹಾಕಲಾಗಿದೆ",
																														" ದೈಹಿಕ ಶಿಕ್ಷೆ",
																														" ವೇಶ್ಯಾವಾಟಿಕೆ",
																														" ತಾರತಮ್ಯ",
																														" ಪಾಲನೆ ವಿಷಯಗಳು",
																														" ದೈಹಿಕ ಕಿರುಕುಳ",
																														" ಶಾಲೆಯಲ್ಲಿ ಮೂಲಸೌಕರ್ಯ",
																														" ಶಾಲೆಯಿಂದ ಮುಕ್ತಾಯ",
																														" ಭಿನ್ನಾಭಿಪ್ರಾಯದ ಮಕ್ಕಳ",
																														" ಶಾಲೆಯಲ್ಲಿ ಸೌಲಭ್ಯಗಳು",
																														" ಬೋಧನಾ ಶುಲ್ಕ",
																														" ಮಧ್ಯಾಹ್ನ ಊಟ",
																														" ಪ್ರವೇಶ ಸಂಬಂಧ",
																														"  ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಮಕ್ಕಳ ತಾರತಮ್ಯವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲಾಗಿದೆ > ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಮಕ್ಕಳ ತಾರತಮ್ಯವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲಾಗಿದೆ",
																														" ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಸ್ಥಾನಗಳನ್ನು ನಿರಾಕರಿಸುವುದು >ಆರ್ ಟಿ ಇ ಅಡಿಯಲ್ಲಿ ಸ್ಥಾನಗಳನ್ನು ನಿರಾಕರಿಸುವುದು",
																														" ಆರ್ ಟಿ ಇ ಅರ್ಜಿಯನ್ನು ತಿರಸ್ಕರಿಸುವುದು",
																														" ಸೆಕ್ಸ್ ನಿರ್ಣಯ",
																														" ಹೆಣ್ಣು ಭ್ರೂಣಹತ್ಯೆ",
																														" ವೈದ್ಯಕೀಯ ಅಲಕ್ಷ್ಯ",
																														" ಶಾಲೆಯ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ",
																														" ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ಮೂಲಭೂತ ಸೌಕರ್ಯ",
																														" ಅಂಗನವಾಡಿ ಕೇಂದ್ರದಲ್ಲಿ ಮಧ್ಯಾಹ್ನ ಊಟ",
																														" ಅಂಗನವಾಡಿ ಕೇಂದ್ರದ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ",
																														" ಹಾಸ್ಟೆಲ್ನಲ್ಲಿನ ಮೂಲಸೌಕರ್ಯ",
																														" ಆಹಾರದಲ್ಲಿ ಹಾಸ್ಟೆಲ್",
																														" ಹಾಸ್ಟೆಲ್ನಲ್ಲಿ ಸಿಬ್ಬಂದಿ ಸಮಸ್ಯೆ",
																														" ಬ್ಲ್ಯಾಕ್ಮ್ಯಾಜಿಕ್",
																														" ಪ್ರೋನೋಗ್ರಫಿ",
																														" ಲೈಂಗಿಕ ಕಿರುಕುಳ",
																														" ಇತರರು"]
    return  "ದೂರಿನ ಪ್ರಕಾರ: "+arrayofComplaintid[ComplaintTypeId];
    }
    fetchLocation(LocationId)
    {
      var arrayofLocationId=["",
																														"ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
																														"ಬೆಂಗಳೂರು",
																														"ಬಾಗಲಕೋಟೆ",
																														"ಬೆಳಗಾವಿ",
																														"ಬಿಜಾಪುರ",
																														"ಬೀದರ್",
																														"ಬಳ್ಳಾರಿ",
																														"ಚಾಮರಾಜ್ನಗರ",
																														"ಚಿಕ್ಕಬಳ್ಳಪುರ",
																														" ಚಿತ್ರದುರ್ಗ",
																														" ಚಿಕ್ಕಮಂಗಳೂರು",
																														" ದಾವಣಗೆರೆ",
																														" ಧಾರವಾಡ",
																														" ಗುಲ್ಬರ್ಗಾ",
																														" ಗದಗ",
																														" ಹಾಸನ",
																														" ಹಾವೇರಿ",
																														" ಕಾರ್ವಾರ್",
																														" ಕೋಲಾರ್",
																														" ಕೊಪ್ಪಳ",
																														" ಮಂಡ್ಯ",
																														" ಮೈಸೂರು",
																														" ಮಡಿಕೇರಿ",
																														" ಮಂಗಳೂರು",
																														" ರಾಯಚೂರು",
																														" ರಾಮನಗರ",
																														" ಶಿವಮೊಗ್ಗಾ",
																														" ತುಮಕೂರು",
																														" ಉಡುಪಿ",
																														" ಯಾದಗಿರಿ",
																														"",]
    return  "ಸ್ಥಳ: "+arrayofLocationId[LocationId];
    }
    GetComplaintStatus(status)
    {
    if  (status==1)
      {
        return  "ದೂರು ಸಕ್ರಿಯವಾಗಿದೆ";
      }
    else
      {
        return "ದೂರನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ";
      }
    }
    renderCompliantdetails()
    {
        return  this.state.complaintDetails.map(ComplaintDetail =>
          <ScrollView key={ComplaintDetail.cp_id} >
          <View key={ComplaintDetail.cp_id} style={styles.detail}>
          <Text style={styles.detailText}>ದೂರು ಸಂಖ್ಯೆ: {ComplaintDetail.cp_id}</Text>
          <Text style={styles.detailText}>{this.fetchRelationship(ComplaintDetail.cp_relationship)}</Text>
          <Text style={styles.detailText}>ಹೆಸರು: {ComplaintDetail.cp_name}</Text>
          <Text style={styles.detailText}>ವಿಳಾಸ: {ComplaintDetail.cp_address}</Text>
          <Text style={styles.detailText}>ದೂರವಾಣಿ ಸಂಖ್ಯೆ: {ComplaintDetail.cp_phone_no}</Text>
          <Text style={styles.detailText}>ಇಮೇಲ್ ವಿಳಾಸ: {ComplaintDetail.cp_email_id}</Text>
          <Text style={styles.detailText}>ಎದುರುದಾರರ ಹೆಸರು:  {ComplaintDetail.cp_resp_name}</Text>
          <Text style={styles.detailText}>ಎದುರುದಾರರ ವಿಳಾಸ: {ComplaintDetail.cp_resp_address}</Text>
          <Text style={styles.detailText}>ಎದುರುದಾರರ ದೂರವಾಣಿ ಸಂಖ: {ComplaintDetail.cp_resp_phone_no}</Text>
          <Text style={styles.detailText}>ಎದುರುದಾರರ ಇಮೇಲ್ ವಿಳಾಸ: {ComplaintDetail.cp_resp_email_id}</Text>
          <Text style={styles.detailText}>{this.fetchcomplaintType( ComplaintDetail.cp_complaint_type)}</Text>
        <Text style={styles.detailText}>{this.fetchLocation( ComplaintDetail.cp_district)}</Text>
          <Text style={styles.detailText}>ವಲಯ ಸಂಖ್ಯೆ: {ComplaintDetail.cp_zone_id}</Text>
          <Text style={styles.detailText}>ದೂರಿನ ಸಾರಾಂಶ: {ComplaintDetail.cp_compliant_details}</Text>
          <Text style={styles.detailText}>ಸಲ್ಲಿಸುವ ದಿನಾಂಕ: {ComplaintDetail.cp_created_date}</Text>
        <Text style={styles.detailText}>{this.GetComplaintStatus(ComplaintDetail.cp_status)}</Text>
          <Text style={styles.detailText}>ದೂರು ಸಕ್ರಿಯವಾಗಿದೆ: {ComplaintDetail.cp_isactive}</Text>
          <Button color="#6E1307" title="ಮುಖಪುಟಕ್ಕೆ" onPress= {Actions.HomeKan}/>
          </View>
          </ScrollView>)
    }
  render() {
    return (

    <ImageBackground source={require('../../images/KareBg.jpeg')} style={styles.container}>

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
