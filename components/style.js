import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window')
const wi = sc.width / 3
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#ebb134',
        width: sc.width,
        height: 40,
        borderRadius: wi,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        justifyContent: "center",
    },
    button2: {
        backgroundColor: '#ebb134',
        width: wi,
        height: 40,
        borderRadius: wi,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        justifyContent: "center",
        margin: 5,
    },
    buttontxt: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: "center",
    },
    textinput: {
        width: sc.width,
        padding: 5,
        marginVertical: 6,
        fontWeight: 'bold',
        fontSize: 24,
    },
    description: {
        width: sc.width,
        height: sc.height / 1.55,
        paddingLeft: 10,
        marginVertical: 6,
        textAlignVertical: 'top',
        fontSize: 22,
        fontWeight: 'bold',
    },
    description2: {
        width: sc.width,
        height: sc.height / 1.4,
        padding: 15,
        marginVertical: 6,
        textAlignVertical: 'top',
        fontSize: 22,
        fontWeight: 'bold'
    },
    simpletext: {
        width: sc.width,
        fontSize: 22,
        fontWeight: 'bold',
    },
    createPost: {
        borderRadius: 10,
        width: sc.width,
        height: sc.height / 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 1,
        justifyContent: "center",
        backgroundColor: '#ebb134'}
})
export default styles;