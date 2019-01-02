import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Llega como props del papá al hijo 'cuandoPresionado'
const Button = ({cuandoPresionado}) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={cuandoPresionado} style={buttonStyle}>
            <Text style={textStyle}>
                Click here.
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;
