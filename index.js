// Import a library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
