// Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums bacanos'} />
        <AlbumList />
    </View>
    );

// Render it to the device
// App as the root component is the only one using AppRegistry
AppRegistry.registerComponent('albums', () => App);
