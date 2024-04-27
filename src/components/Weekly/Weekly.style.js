import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      borderWidth:0.5,
      borderRadius:10,
      borderColor:'#ffffff40',
      paddingVertical:8,
      paddingHorizontal:11,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'#ffffff36',
      marginBottom:5
      
    },
    image: {
      width:66,
      height:66,
      marginRight:11,
   
   
    },
    title: {
      color: '#303345',
      fontWeight: '600',
      paddingLeft: 11
    },
    value: {
       flex:1,
       textAlign:'right',
       fontWeight: '700',
       color: '#303345'
    },
    },
);