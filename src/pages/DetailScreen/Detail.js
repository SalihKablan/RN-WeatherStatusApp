import React from "react";
import {View,ScrollView, FlatList,TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getImage } from "../../helpers/getImageHelpers";
import '../../components/Weekly/Weekly';
import '../../components/Tomorrow/Tomorrow';
import styles from '../DetailScreen/Detail.style';
import Weekly from "../../components/Weekly/Weekly";
import Tomorrow from "../../components/Tomorrow/Tomorrow";
import { SafeAreaView } from "react-native-safe-area-context";
import { trundle } from "../../helpers/mathroundHelpers";
import Button from "../../components/Button/Button";


const Detail = ({navigation,route}) => {
    const {data}=route.params;
    

    const renderItem=({item})=>{
        return(
        <View>
        <Weekly  title={item.day} value={`${trundle(item.degree)}  C°`} image={getImage(item.status)} />
        </View>
        )
    }
   
    return (
        <LinearGradient
        style={styles.container}
        colors={['#FEE3BC', '#F39876']}
        start={{x: 0.5, y: 0.2}}
        end={{x: 1, y: 1}}
        >
            <SafeAreaView style={{flex:1}}>
            <TouchableOpacity style={{paddingLeft:18,marginTop:18,marginBottom:18}} onPress={()=>navigation.goBack()}><Image style={{width:25,height:25}} source={require('../../../assets/images/back.png')} /></TouchableOpacity>
            <ScrollView>
            <Tomorrow day={data.result[1].day}  
                 degree={`${trundle(data.result[1].degree)} C°`} 
                 mainImage={getImage(data.result[1].status)}
                 imageOne={require('../../../assets/images/min.png')}  
                 min={`${trundle(data.result[1].min)} C°`} 
                 imageTwo={require('../../../assets/images/max.png')}  
                 max={`${trundle(data.result[1].max)} C°`}
                 imageThree={require('../../../assets/images/night.png')} 
                 night={`${trundle(data.result[1].night)} C°`} 
                 imageFour={require('../../../assets/images/humidity.png')}
                 humidity={`%${trundle(data.result[1].humidity)}`}
                 />
            <FlatList scrollEnabled={false} data={data.result.slice(2)} renderItem={renderItem} contentContainerStyle={{paddingHorizontal:20}}/>
            </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Detail;