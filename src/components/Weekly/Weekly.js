import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Weekly.style';

const Weekly = ({image,title,value}) => {
    return(
        <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text> 
                <Image style={styles.image} source={image} />   
        </View>
    );
};

export default Weekly;