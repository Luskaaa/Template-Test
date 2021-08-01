import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,100,255,1)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        width: '100%',
        height: '30%',
        backgroundColor: 'rgba(0,120,255,1)',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})