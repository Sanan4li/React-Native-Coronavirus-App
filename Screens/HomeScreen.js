import React, { Component } from 'react'
import {StyleSheet, View, Button, Text, ScrollView, StatusBar} from 'react-native';
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
import { Table, TableWrapper, Row } from 'react-native-table-component';
const { NovelCovid } = require('novelcovid');
const covid = new NovelCovid();
 class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
         title : navigation.getParam("title"),
         headerTitleStyle: { flex: 1, textAlign: 'center'},  
        };
      };
      state = {
        tableHead: ['Country Name', 'Reported', 'Active', 'Today Cases', 'Deaths', 'Today Deaths', 'Recovered', 'Critical', ],
        widthArr: [150, 100, 100, 100, 100,100, 100, 100, ],
        data : null,
        loading : true,
      }
      setData = (data)=>{
        
    }
      componentDidMount() {
        // covid.all().then(
        //   (data)=>{
        //     console.log(data);
        //   }
        // );
        covid.countries(null,{sort: 'cases'}).then(
            (data)=>{
                console.log("fetched", data)
                this.setState({
                    loading:false,
                    data,
                },);
            }
        );
      }

      displayTable = ()=>{
         const data = this.state.data;
        const keys = ["country", "cases","active","todayCases","deaths", "todayDeaths", "recovered", "critical"]
        const tableData = [];
        for (let i = 0; i < data.length; i += 1) {
          const rowData = [];
          for (let j = 0; j < 7; j += 1) {
            rowData.push(data[i][keys[j]]);
          }
          tableData.push(rowData);
        }
      }

     
     
    render() {
        let TableView = null;
        if(!this.state.loading){
        const data = this.state.data;
        const keys = ["country", "cases","active", "todayCases","deaths", "todayDeaths", "recovered", "critical"]
        const tableData = [];
        for (let i = 0; i < data.length; i += 1) {
          const rowData = [];
          for (let j = 0; j < 8; j += 1) {
            rowData.push(data[i][keys[j]]);
          }
          tableData.push(rowData);
        }
        TableView =  <ScrollView horizontal={true}>
        <View>
        <StatusBar backgroundColor="#023953" barStyle="light-content" />
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={this.state.widthArr}
                    style={[styles.row, index%2 && {backgroundColor: 'white'}]}
                    textStyle={styles.textRow}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
        }
        else{
            TableView = <View style={{alignItems:"center",height:200 }}>
                <StatusBar backgroundColor="#023953" barStyle="light-content" />
                 <View style={{marginTop:100,}}>
               <Text style={{fontSize:19, color:"black"}}>Loading Data.. Please Wait...</Text>
               </View>
               <View>
               <SkypeIndicator color='#023953' size={100} style={{height:40}} />
               </View>
              
            </View>
        }
        return (
            <View style={styles.container}>
                {TableView}
          </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 40, backgroundColor: '#262626', },
    text: { textAlign: 'center', fontWeight: '100',color:"white" },
    textRow: { textAlign: 'center', fontWeight: '100',color:"black" },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#e6faff' }
  });

export default HomeScreen;
