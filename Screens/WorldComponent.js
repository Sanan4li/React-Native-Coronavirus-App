import React, { Component } from 'react';
import {View, Text,} from "react-native";
class PakistanComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>
                    {this.props.world.active}
                </Text>
            </View>
        );
    }
}

export default PakistanComponent;