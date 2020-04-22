import React, { Component } from 'react'
import {StyleSheet, View, Text , Button} from 'react-native';
import MyHeaderButton from "./MyHeaderButton";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import PakistanComponent from "./PakistanComponent";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
const parseString = require('react-native-xml2js').parseString;
const { NovelCovid } = require('novelcovid');
const covid = new NovelCovid();
 class CategoriesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitleStyle: { flex: 1, textAlign: 'center'},
        };
      };
      state  = {
        pakistan : [],
        loading : true,
        countryName : '',
        countryFlag: '',
        tableTitle: ['Country Name', "Reported","Active", "Today Cases", "Deaths", "Today Deaths", "Recovered","Critical"],
        heightArr : [60,40,40,40,40,40,40,40],
        
    }
  setData = (data, flag)=>{
      this.setState({
          pakistan:data,
          loading:false,
          countryFlag : flag.flag,
          
      },);
  }
  componentDidMount = ()=>{
    let name;
    fetch('http://api.hostip.info').then(response => {
        return response.text();
   }).then(xml => { 
    parseString(xml, function (err, result) {
    name =  result.HostipLookupResultSet["gml:featureMember"][0].Hostip[0].countryName[0];
        });
        this.setCountryName(name.toLowerCase());
        });
    }
    setCountryName = (name)=>{
        this.setState({
            countryName:name
        },()=>{
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
            );
        });
    }
    render() {
        const state = this.state;
        return (
            <View style={styles.main}>
                {this.state.loading?<View style={{alignItems:"center",height:200 }}>
                 <View style={{marginTop:100,}}>
               <Text style={{fontSize:19, color:"black"}}>Loading Data.. Please Wait...</Text>
               </View>
               <View>
               <SkypeIndicator color='#023953' size={100} style={{height:40}} />
               </View>
              
            </View>:<PakistanComponent data={this.state}/>}
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        // alignItems :"center",
         backgroundColor:"#f2f2f2"
        
    },
  
});

export default CategoriesScreen;
