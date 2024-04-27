import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body:{
        marginHorizontal:16,
        marginVertical:15,
        backgroundColor:'#ffffff80',
        borderWidth:0.5,
        borderRadius:10,
        borderColor:'#ffffff80',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 11,
        paddingTop:8,
     },
    mainImage: {
        width:66,
        height:66,
        marginRight:11,
        marginLeft:5
    },
    title: {
        color:'#303345',
        fontWeight:'600',
        paddingVertical: 12,
        paddingRight:75

    },
    value: {
        paddingVertical: 12,
        paddingLeft: 75,
        color: '#303345',
        fontWeight: '700',
        paddingRight:5
    },
     body_container: {
        flexDirection: 'row',
        paddingHorizontal: 11,
    },
    
    inner_min: {
        paddingVertical: 11,
        paddingRight: 18.5
    },
    imageOne: {
        width:66,
        height:66,  
    },
    min: {
        color: '#303345',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop:8
    },
    inner_max: {
        paddingVertical: 11,
        paddingLeft: 18.5,
        paddingRight: 18.5
    },
    max: {
        color: '#303345',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop:8
    },
    imageTwo: {
        width:66,
        height:66,  
    },
    inner_night: {
        paddingVertical: 11,
        paddingLeft:18.5,
    },
    imageThree: {
        width:66,
        height:66,   
    },
    night: {
        color: '#303345',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop:8
    },
    inner_humidity: {
        paddingVertical: 11,
        paddingLeft:18.5,
    },
    imageFour: {
        width:66,
        height:66,   
    },
    humidity: {
        color: '#303345',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop:8
    },

});
