import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Summary.style';

const Summary = ({degree,status,image}) => {
    return(
            <View style={styles.body_container}>
                <Image style={styles.image} source={image} />
                <View>
                <Text style={styles.degree}>{degree}</Text>
                <Text style={styles.status}>{status}</Text>
                </View>
                </View>
    );
};

export default Summary;