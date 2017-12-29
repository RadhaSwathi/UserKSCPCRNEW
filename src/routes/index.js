import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {Scene,Router,Drawer,Stack} from 'react-native-router-flux';
import Home from '../components/Home'
import ComplaintStatus from '../components/ComplaintStatus'
import ComplaintDetails from '../components/ComplaintDetails'
import ComplaintDetailsEdit from '../components/ComplaintDetailsEdit'
import RespondentDetails from '../components/RespondentDetails'
import ChildDetails from '../components/ChildDetails'



const RouterComponent =()=>{
return(
  <Router >
      <Scene key='root'>
        <Scene  key='Home' initial component={Home} hideNavBar={true}   />
        <Scene  key='ComplaintStatus' component={ComplaintStatus}  navigationBarStyle={styles.NavStyle} titleStyle={styles.NavTitle} title='Complaint status' sceneStyle={{top:60}}   />
        <Scene key='ComplaintDetails' sceneStyle={{top:150}} component={ComplaintDetails} title='Complaint Details' />
        <Scene key='ComplaintDetailsEdit'  component={ComplaintDetailsEdit} title='Complaint Detail' />
        <Scene key='RespondentDetails' component={RespondentDetails} title='Respondent Detail' />
        <Scene key='ChildDetails' component={ChildDetails} title='Child Details' />
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
