import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Tomorrow.style';


const Tomorrow = ({ mainImage,day,degree,min,max,night,humidity, imageOne, imageTwo, imageThree, imageFour}) => {
    return(
        <View style={styles.body}>
            <View style={styles.container}>   
                    <Text style={styles.title}>{day}</Text>
                    <Text style={styles.value}>{degree}</Text>
                    <Image style={styles.mainImage} source={mainImage} />  
            </View>
                
            <View style={styles.body_container}>  
                <View style={styles.inner_min}>
                    <Image style={styles.imageOne} source={imageOne} />
                    <Text style={styles.min}>{min}</Text>
                </View>
                <View style={styles.inner_max}>
                    <Image style={styles.imageTwo} source={imageTwo} />
                    <Text style={styles.max}>{max}</Text>
                </View>
                <View style={styles.inner_night}>
                    <Image style={styles.imageThree} source={imageThree} />
                    <Text style={styles.night}>{night}</Text>
                </View> 
                <View style={styles.inner_humidity}>
                    <Image style={styles.imageFour} source={imageFour} />
                    <Text style={styles.humidity}>{humidity}</Text>
                </View>   
            </View>      
     </View>
    );
};

export default Tomorrow;