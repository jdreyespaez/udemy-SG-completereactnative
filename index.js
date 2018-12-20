// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a component
const App = () => {
    return (
        <Header />
    );
};

// Render it to the device
// App as the root component is the only one using AppRegistry
AppRegistry.registerComponent('albums', () => App);
