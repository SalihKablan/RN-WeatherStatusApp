import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Expected.style';

const Expected = ({image,title,value}) => {
    return(
        <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text>     
        </View>
    );
};

export default Expected;