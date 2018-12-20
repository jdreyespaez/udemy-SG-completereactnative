// First step: import libraries
import React from 'react';
import { Text } from 'react-native';

// Second step: create the component
// The name of the function will be the same as the component
const Header = () => {
    const { textStyle } = styles;

    // style is a prop
    return <Text style={textStyle}>Albums!</Text>;
};

// By convention styles will go as an object after the component
const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Third step: make the component available
// Using ES6 syntax
export default Header;
