import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Entypo';
class CartScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitleStyle: { flex: 1, textAlign: 'center'},
        };
      };    
      state = {
        activeSections: [],
      };
     
      _renderSectionTitle = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
     
      _renderHeader = section => {
        return (
          <View style={styles.faq}>
            <Text style={{color:"white", fontSize:18, width:"80%"}}>{section.title}</Text>
            <Icon name="chevron-thin-down" color="white" size={25}/>
            
          </View>
        );
      };
     
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text style={{fontSize:17,padding:10,color:"black"}}>{section.content}</Text>
          </View>
        );
      };
     
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
     
    render() {
        const SECTIONS = [
            {
              title: 'What is Isolation?',
              content: 'Separation of the affected person or suspected of being infected from other healthy people for the duration of the disease infection in appropriate places and health conditions, in order to prevent the transmission of the infection.',
            },
           
           
            {
                title: 'What is Quarantine?',
                content: 'Restricting the activities of healthy people for a period of time as determined by the competent medical authorities.',
              }, 
            {
              title: 'Does Isolation and quarantine prevent infection of others?',
              content: 'Quarantine and isolation are effective measures that are taken to reduce the spread of the disease to all members of society.',
            },
            
            {
                title: 'What is the difference between isolation and quarantine?',
                content: 'Isolation and quarantine are common public health strategies used to help prevent the spread of infectious diseases. Isolation and quarantine keep people who are sick or exposed to illness isolated for a deﬁned period of time to prevent the disease spread.',
              },
          ];
        return (
            <View style={styles.main}>
                <ScrollView>
                <View>
                    <Text style={styles.headerText}>
                    Corona Virus Symptoms
                    </Text>
                </View>
               <View style={styles.symptoms}>
                   <Image source={require("../assets/images/w4.png")} style={styles.image}/>
                   <Text style={{fontSize:18}}>Hot Fever</Text>
               </View>
               <View style={styles.symptoms}>
               <Text style={{fontSize:18}}>Coughing</Text>
                   <Image source={require("../assets/images/w1.png")} style={styles.image}/>
               </View>
               <View style={styles.symptoms}>
                   <Image source={require("../assets/images/w5.png")} style={styles.image}/>
                   <Text style={{fontSize:18}}>Sore Throat</Text>
               </View>
               <View style={styles.symptoms}>
               <Text style={{fontSize:18}}>Shortness Of Breath</Text>
                   <Image source={require("../assets/images/w3.png")} style={styles.image}/>
               </View>
               <View>
                   <Text style={styles.headerText}>
                       Precautions
                   </Text>
               </View>
               <View style={styles.precautions}>
               <Text style={{fontSize:18}}>Wash Hands</Text>
                   <Image source={require("../assets/images/wash.png")} style={{width:100, height:150}}/>
               </View>
               <View style={styles.precautions}>
               <Text style={{fontSize:18}}>Stay at Home</Text>
                   <Image source={require("../assets/images/home.png")} style={{width:100, height:150}}/>
               </View>
               <View style={styles.precautions}>
               <Text style={{fontSize:18}}>Wear Masks</Text>
                   <Image source={require("../assets/images/mask.png")} style={{width:150, height:150}}/>
               </View>
              <View style={styles.precautions}>
               <Text style={{fontSize:18}}>No Handshake</Text>
                   <Image source={require("../assets/images/handshake.png")} style={{width:100, height:100}}/>
               </View>
               <View style={styles.precautions}>
               <Text style={{fontSize:18}}>No Parties</Text>
                   <Image source={require("../assets/images/gathering.png")} style={{width:150, height:150}}/>
               </View>
               <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
       
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
               </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        //alignItems :"center",
       
    },
    headerText:{
        padding:10,
        backgroundColor:"#023953",
        fontSize:18,
        borderRadius:20,
        marginTop:5,
        margin:5,
        color:"white",
        textAlign:"center",
    },
    faq:{
        padding:15,
        backgroundColor:"#023953",
        fontSize:18,
        borderRadius:10,
        marginTop:5,
        margin:5,
        color:"white",
       
        flexDirection:"row",
        justifyContent:"space-between"
    },
    content : {
        padding:5,
        borderRadius:10,
        margin:5,
        backgroundColor:"#e6fff5",
        fontSize:18,
        
    },
    symptoms:{
        flexDirection:"row", 
        justifyContent:"space-around", 
        alignItems:"center", 
        borderWidth:2, 
        margin:3,
        padding:5, 
        borderRadius:10
    },
    image : {
        width:80,
        height:80
    },
    precautions:{
        flexDirection:"row", 
        justifyContent:"space-around", 
        margin:5, 
        padding:20, 
        alignItems:"center", 
        borderWidth:2, 
        borderRadius:10
    }

});

export default CartScreen;
