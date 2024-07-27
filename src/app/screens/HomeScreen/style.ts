import { StyleSheet, ViewStyle } from "react-native";
import { AppTheme } from "../../layouts/theme";

export const rootStyles  = (theme:AppTheme) => StyleSheet.create({
    linearGradient: {
        flex: 1,
    }as ViewStyle,
    header: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }as ViewStyle,
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width:'100%',
    }as ViewStyle,
    searchButton: {
        padding: 10,
        marginLeft:-40
    }as ViewStyle,
    modal: {
        height: 350,
        color: '#ccc',
    }as ViewStyle,
    overlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
    }as ViewStyle,
    background: {
        borderRadius:15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }as ViewStyle,
    text: {
        color: '#fff',
        zIndex: 1,
    }as ViewStyle,
    textDate: {
        fontSize:12,

    }as ViewStyle,
    textTemp: {
        fontSize: 74,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: '#ccc', 
        textShadowOffset: { width: -10, height: 10 }as ViewStyle, 
        textShadowRadius: 50, 
    }as ViewStyle,
    textMain: {
        fontSize:16,
        fontWeight:'bold',
        paddingVertical:8
    }as ViewStyle,
    textWindHum: {
        fontSize:12
    }as ViewStyle,
})