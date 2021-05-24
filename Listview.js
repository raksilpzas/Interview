// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View,FlatList,Image,Linking} from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';

const Data ="https://jsonplaceholder.typicode.com/photos"


export default class ListView extends Component {

  
  constructor(props) {
    super(props);
    this.state = { 
      isLoard: true,
      data:[]
     
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        isLoard: false,
        data: responseJson
      })
    })
  }

  ShowItem = ({item,index}) =>{
    return(
      <View style={{flex:1,flexDirection:'row'}}>
       
        <Image source={{uri: item.thumbnailUrl}} style={{width:100,height:100}}/>
        <View style={{flex:1,justifyContent:'center'}}>
           <Text>{item.id+"  "+item.title}</Text>
            <Text>{item.thumbnailUrl}</Text>
        </View>
        

      </View>
    )
  }
  

  render() {
    
    return (

    
      <View > 
        <FlatList data={this.state.data}
          renderItem={this.ShowItem}
          
        />
                       
      </View>
    
    );
  }
}

//keyExtractor={(item,index)=>index.toString()}