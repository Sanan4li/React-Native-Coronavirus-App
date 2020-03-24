import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';

 class ContactScreen extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>
                    Contact Screen
                </Text>
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

export default ContactScreen;
