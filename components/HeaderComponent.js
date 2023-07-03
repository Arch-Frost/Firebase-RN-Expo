import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";


export default function HeaderComponent() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Resume Builder</Text>
            <Text style={styles.subtext}> by Muhammad Ahmad Zafar</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: '#606266',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        shadowOffset: {width: 0, height: 2},
    },
    text: {
        // fontFamily: 'Inter-BoldItalic',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 10,
        color: 'white',
    },
    subtext: {
        // fontFamily: 'Inter-MediumItalic',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontStyle: 'italic',
        paddingBottom: 20,
        paddingTop: 0,
    }
})