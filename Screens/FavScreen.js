import React, { Component } from 'react'
import {StyleSheet, View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import PakistanComponent from "./PakistanComponent";
import { Keyboard } from 'react-native';
const { NovelCovid } = require('novelcovid');
const covid = new NovelCovid();
 class FavScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitleStyle: { flex: 1, textAlign: 'center'},
            
        };
      };
      state  = {
        message : "Enter a Country Name",
        pakistan : [],
        loading : true,
        countryName : '',
        countryFlag: '',
        tableTitle: ['Country Name', "Reported","Active", "Today Cases", "Deaths", "Today Deaths", "Recovered","Critical"],
        heightArr : [40,40,40,40,40,40,40,40],
        
    }
  searchCountry = ()=>{
      if(this.state.countryName==""){
        Alert.alert("Enter Country", "Please Enter Country Name to Search", ["OK"])
      }
    covid.countries(this.state.countryName).then(
        (data)=>{
                    
            const tableData =[] ;
            const keys = ["country", "cases", "active", "todayCases", "deaths", "todayDeaths", "recovered", "critical"];
             for(let i=0;i<8;i++){
                 const key = keys[i];
                 const item = data[key];
                   tableData.push(item);
             }
             //console.log(tableData);
            this.setData(tableData, data.countryInfo);
        }
    ).catch((e)=>{
       this.displayError();
    });
  }
  displayError = ()=>{
      this.setState({
        message: "Sorry! No Country Found!",
        loading:true,
        countryName:""
      });
  }
  setData = (data, flag)=>{
      Keyboard.dismiss();
    this.setState({
        pakistan:data,
        loading:false,
        countryFlag : flag.flag,
        countryName:""
        
    },);
}

    render() {
        let payload = { id: 'button-1' };
        return (
            <View style={styles.main}>
               <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-around",marginTop:10}}>
               <TextInput value={this.state.countryName} onChangeText={(countryName) => this.setState({countryName})} placeholder="Enter Country Name " style={styles.input}/>
               <RaisedTextButton titleColor="white" color="#00cccc" title='Search' onPress={this.searchCountry} payload={payload} />
               </View>
               {this.state.loading?<View style={{flex:1,  alignItems:"center"}}><Text style={{marginLeft:10, marginTop:20, fontSize:20}}>{this.state.message}</Text></View>:<PakistanComponent data={this.state}/>}
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        backgroundColor:"#f2f2f2",
        //alignItems :"center",
       // justifyContent : "center",
    },
    input:{
        borderWidth:1,
        padding:10, 
        width:150, 
        height:40, 
        borderRadius:5
    }
});

export default FavScreen;
