import React from "react";
import {Text, TouchableOpacity,View} from 'react-native';
import styles from './Button.style';
const Button = ({onPress,text,style}) => {
    return(
       
        <TouchableOpacity onPress={onPress} style={[styles.container,style]} > 
            <Text style={styles.text}>{text}</Text>       
        </TouchableOpacity>
       
    );
};

export default Button;