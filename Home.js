// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Alert,ScrollView,Image,Dimensions, Button,ActivityIndicator,Linking } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';

const image =[
  {"link":'https://image.freepik.com/free-photo/young-woman-blue-sport-wear-bridge-hot-sunny-morning-with-wireless-headphones-mobile-phone-take-selfie-photo-video-socials-shows-her-muscles-biceps_343596-6331.jpg'
  ,"Web":'https://www.thelivingos.com/'},
  {"link":'https://image.freepik.com/free-photo/happy-asian-family-holding-cardboard-box-run-into-new-home-relocation-concept_74952-1210.jpg'
  ,"Web":'https://www.google.co.th/maps'},
  {"link":'https://image.freepik.com/free-photo/girl-home-woman-make-yoga-lady-shoot-video-blog_1157-43925.jpg'
  ,"Web":'https://image.freepik.com/free-photo/girl-home-woman-make-yoga-lady-shoot-video-blog_1157-43925.jpg'},

]


const {width} = Dimensions.get("window");
const height = width*0.7;

export default class Homepage extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
     
     
    }
  }
  
  signOut = () => {
    
    setTimeout(()=>{
      this.props.navigation.navigate('Login')
    },2000)
    return(
      <View style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,alignItems: 'center',justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    )
  }

  

  render() {
    return (
    
      <View style={{marginTop:40}} > 
        <ScrollView pagingEnabled horizontal style={{width,height}}>
          
        {
          image.map((item,i)=>(
            <TouchableHighlight onPress={() => Linking.openURL(item.Web)}>
              <Image key={i} source={{uri: item.link}}
                style={{height,width,resizeMode:'cover'}}
              
              />
            </TouchableHighlight>

            )
          )
        }
        

         
         </ScrollView>
         <Button title="Log out" onPress={this.signOut}/>
         <Button title="Listview" onPress={() => this.props.navigation.navigate('ListView')}/>
        
        

        
                                    
      </View>
    
    );
  }
}

