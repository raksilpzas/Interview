// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator,Image,TouchableOpacity,Linking } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';



export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      hidepassword: true
    }
  }

  setpassword = () =>{
    this.setState({hidepassword: !this.state.hidepassword})
  }

  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else if(this.state.email === ''){
      Alert.alert('Please fill in you username')
    }
    else if(this.state.password === ''){
      Alert.alert('Please fill in you password')
    }
     else {
      this.setState({
        isLoading: true,
      })  
      setTimeout(()=>{this.props.navigation.push('Home'),4000})
    }
  }

  render() {
    
    return (
      <View style={styles.container}> 
      
         <View style={{alignContent:'center',alignItems:'center'}}>
          <Image source={require('./assets/Falling_Diary.png')} style = {{width:190,height:190}} />
         </View>
         

      
        
      
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        <View style={styles.textBoxContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={this.state.hidepassword}
        /> 
        <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setpassword}>
          <Text>{this.state.hidepassword ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
        <Text>Must be at least 8 characters</Text>
        </View>

       
        <TouchableHighlight
          style={{ marginTop:30,borderRadius: 40/2,height: 60,width:300,backgroundColor:'#51DBA9', borderStartColor:'#000',borderWidth:2  }}
          color="#fff"
          title="Login"
          onPress={() => this.userLogin()}>
            <View>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:5,marginLeft:10}}>
              LOG IN
              </Text>
            </View>
            
        </TouchableHighlight>   

                                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    fontSize:30,
    justifyContent: "center",
    alignItems:'center'
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }, 
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 40,
    padding: 2
  },
});
//51DBA9