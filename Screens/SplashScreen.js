import React, { Component } from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';

 class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={{fontSize:20}}>
                    Coronavirus Updates...
                </Text>
                <Image source={require("../assets/images/covid-virus.png")} style={{width:200, height:200}}/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex :1,
        alignItems :"center",
        justifyContent : "center",
    }
});

export default SplashScreen;
