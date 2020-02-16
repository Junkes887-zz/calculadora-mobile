import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Result extends React.Component {
    render() {
        const { result } = this.props;
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{ result === null ? 0 : result }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        minWidth: 314,
        minHeight: 80,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: '#FF6B00',
        alignItems: 'flex-end'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginEnd: 10,
        fontSize: 50
    },
})

export default Result