// First step: import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Second step: create the component
// The name of the function will be the same as the component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    // style is used as a prop
    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

// By convention styles will go as an object after the component
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8'
    },
    textStyle: {
        fontSize: 20
    }
};

// Third step: make the component available
// Using ES6 syntax
export default Header;
