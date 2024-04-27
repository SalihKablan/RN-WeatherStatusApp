import React from "react";
import {View, Text} from 'react-native';
import styles from './Location.style';

const Location = ({city,country,date,day}) => {
    return(
            <View style={styles.body_container}>
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.country}>{country}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.date}>{day}</Text>  
                </View>
    );
};

export default Location;