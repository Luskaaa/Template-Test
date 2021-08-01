import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import styles from './style';

export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    BackScreen = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <>
                <StatusBar hidden />
                <View style={styles.container}>
                    <Text style={[styles.text, { marginBottom: '10%', fontSize: 30 }]}> Lucas Migueis  </Text>
                    <Text style={styles.text}> Template </Text>
                    <Text style={styles.text}> Com Estrutura de Pastas </Text>
                    <Text style={styles.text}> E React-Navigation Implementado </Text>
                    <TouchableOpacity onPress={this.BackScreen} style={styles.button}>
                        <Text style={styles.text}> Aperte Aqui! </Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { marginTop: '10%' }]}> Página 2 </Text>

                </View>
            </>
        )
    }
}
