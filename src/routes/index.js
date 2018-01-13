import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {Scene,Router,Drawer,Stack} from 'react-native-router-flux';
import Home from '../components/Home'
import ComplaintStatus from '../components/ComplaintStatus'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintDetailsEdit from '../components/ComplaintDetailsEdit'
import RespondentDetails from '../components/RespondentDetails'
import ChildDetails from '../components/ChildDetails'
import ConfirmMobile from '../components/ConfirmMobile'
import HomeKan from '../components/Kannada/HomeKan'
import ComplaintStatusKan from '../components/Kannada/ComplaintStatusKan'
import ComplaintDetailsKan from '../components/Kannada/ComplaintDetailsKan'
import ComplaintDetailsEditKan from '../components/Kannada/ComplaintDetailsEditKan'
import RespondentDetailsKan from '../components/Kannada/RespondentDetailsKan'
import ChildDetailsKan from '../components/Kannada/ChildDetailsKan'
import ConfirmMobileKan from '../components/Kannada/ConfirmMobileKan'



const RouterComponent =()=>{
return(
  <Router >
      <Scene key='root'>
        <Scene  key='Home'  component={Home} hideNavBar={true}   />
        <Scene  key='ConfirmMobile' component={ConfirmMobile}  title='Confirm Mobile Number' sceneStyle={{top:60}}   />
        <Scene  key='ComplaintStatus' component={ComplaintStatus}  navigationBarStyle={styles.NavStyle} titleStyle={styles.NavTitle} title='Complaint status' sceneStyle={{top:60}}   />
        <Scene key='ComplaintDetails' sceneStyle={{top:150}} component={ComplaintDetails} title='Complaint Details' />
        <Scene key='ComplaintDetailsEdit'  component={ComplaintDetailsEdit} title='Complaint Detail' />
        <Scene key='RespondentDetails' component={RespondentDetails} title='Respondent Detail' />
        <Scene key='ChildDetails'initial  component={ChildDetails} title='Child Details' />
        <Scene  key='HomeKan'   component={HomeKan} hideNavBar={true}   />
        <Scene  key='ConfirmMobileKan' component={ConfirmMobileKan} title='ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನೋಂದಾಯಿಸಿ' sceneStyle={{top:60}}   />
        <Scene  key='ComplaintStatusKan'  component={ComplaintStatusKan}  navigationBarStyle={styles.NavStyle} titleStyle={styles.NavTitle} title='Complaint status' sceneStyle={{top:60}}   />
        <Scene key='ComplaintDetailsKan' sceneStyle={{top:150}} component={ComplaintDetailsKan} title='ದೂರು ವಿವರಗಳುಕೆ' />
        <Scene key='ComplaintDetailsEditKan'   component={ComplaintDetailsEditKan} title='ದೂರು ವಿವರ' />
        <Scene key='RespondentDetailsKan' component={RespondentDetailsKan} title='ಎದುರಾಳಿಯ ವಿವರ' />
        <Scene key='ChildDetailsKan' component={ChildDetailsKan} title='ಮಗುವಿನ  ವಿವರ' />
      </Scene>
  </Router>
);
};

const styles = StyleSheet.create({
  NavStyle: {
    justifyContent:'center',
    backgroundColor:'transparent',
    borderBottomWidth: 0,
    flex:1,
    flexDirection:'row'

  },
  NavTitle:{
  fontSize:15,
  fontWeight:'bold',
  alignSelf:'center'

  }
});

export default RouterComponent;
