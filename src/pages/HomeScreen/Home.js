import React,{useEffect, useState} from "react";
import {View, ActivityIndicator, Text, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trundle } from "../../helpers/mathroundHelpers";
import Location from '../../components/Location/Location';
import Summary from '../../components/Summary/Summary';
import Expected from '../../components/Expected/Expected';
import Button from '../../components/Button/Button';
import styles from '../HomeScreen/Home.style';
import { firstChUp } from "../../helpers/stringHelpers";
import useFetch from "../../hooks/useFetch/useFetch";
import { getImage } from "../../helpers/getImageHelpers"
import { SelectList } from 'react-native-dropdown-select-list'

const city = [
    {"key": 1, "value": "Adana"},
    {"key": 2, "value": "Adıyaman"},
    {"key": 3, "value": "Afyonkarahisar"},
    {"key": 4, "value": "Ağrı"},
    {"key": 5, "value": "Amasya"},
    {"key": 6, "value": "Ankara"},
    {"key": 7, "value": "Antalya"},
    {"key": 8, "value": "Artvin"},
    {"key": 9, "value": "Aydın"},
    {"key": 10, "value": "Balıkesir"},
    {"key": 11, "value": "Bilecik"},
    {"key": 12, "value": "Bingöl"},
    {"key": 13, "value": "Bitlis"},
    {"key": 14, "value": "Bolu"},
    {"key": 15, "value": "Burdur"},
    {"key": 16, "value": "Bursa"},
    {"key": 17, "value": "Çanakkale"},
    {"key": 18, "value": "Çankırı"},
    {"key": 19, "value": "Çorum"},
    {"key": 20, "value": "Denizli"},
    {"key": 21, "value": "Diyarbakır"},
    {"key": 22, "value": "Edirne"},
    {"key": 23, "value": "Elazığ"},
    {"key": 24, "value": "Erzincan"},
    {"key": 25, "value": "Erzurum"},
    {"key": 26, "value": "Eskişehir"},
    {"key": 27, "value": "Gaziantep"},
    {"key": 28, "value": "Giresun"},
    {"key": 29, "value": "Gümüşhane"},
    {"key": 30, "value": "Hakkari"},
    {"key": 31, "value": "Hatay"},
    {"key": 32, "value": "Isparta"},
    {"key": 33, "value": "Mersin"},
    {"key": 34, "value": "İstanbul"},
    {"key": 35, "value": "İzmir"},
    {"key": 36, "value": "Kars"},
    {"key": 37, "value": "Kastamonu"},
    {"key": 38, "value": "Kayseri"},
    {"key": 39, "value": "Kırklareli"},
    {"key": 40, "value": "Kırşehir"},
    {"key": 41, "value": "Kocaeli"},
    {"key": 42, "value": "Konya"},
    {"key": 43, "value": "Kütahya"},
    {"key": 44, "value": "Malatya"},
    {"key": 45, "value": "Manisa"},
    {"key": 46, "value": "Kahramanmaraş"},
    {"key": 47, "value": "Mardin"},
    {"key": 48, "value": "Muğla"},
    {"key": 49, "value": "Muş"},
    {"key": 50, "value": "Nevşehir"},
    {"key": 51, "value": "Niğde"},
    {"key": 52, "value": "Ordu"},
    {"key": 53, "value": "Rize"},
    {"key": 54, "value": "Sakarya"},
    {"key": 55, "value": "Samsun"},
    {"key": 56, "value": "Siirt"},
    {"key": 57, "value": "Sinop"},
    {"key": 58, "value": "Sivas"},
    {"key": 59, "value": "Tekirdağ"},
    {"key": 60, "value": "Tokat"},
    {"key": 61, "value": "Trabzon"},
    {"key": 62, "value": "Tunceli"},
    {"key": 63, "value": "Şanlıurfa"},
    {"key": 64, "value": "Uşak"},
    {"key": 65, "value": "Van"},
    {"key": 66, "value": "Yozgat"},
    {"key": 67, "value": "Zonguldak"},
    {"key": 68, "value": "Aksaray"},
    {"key": 69, "value": "Bayburt"},
    {"key": 70, "value": "Karaman"},
    {"key": 71, "value": "Kırıkkale"},
    {"key": 72, "value": "Batman"},
    {"key": 73, "value": "Şırnak"},
    {"key": 74, "value": "Bartın"},
    {"key": 75, "value": "Ardahan"},
    {"key": 76, "value": "Iğdır"},
    {"key": 77, "value": "Yalova"},
    {"key": 78, "value": "Karabük"},
    {"key": 79, "value": "Kilis"},
    {"key": 80, "value": "Osmaniye"},
    {"key": 81, "value": "Düzce"}
  ]
  




const Home = ({ navigation }) => {
    const [selectedCity,setSelectedCity]=useState('istanbul')
    const { loading, data, error, fetchData } = useFetch(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${selectedCity}`, 'apikey 2nDBOGtpAnVP9wc3bWM3OL:7HiedsQCRZ8o07fVmDjM2K');

    useEffect(() => {
        fetchData()
    }, [selectedCity]);


    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

  



    return (
        <LinearGradient
        style={styles.container}
        colors={['#FEE3BC', '#F39876']}
        start={{x: 0.5, y: 0.2}}
        end={{x: 1, y: 1}}
        > 
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                    <Location city={firstChUp(data.city)} country={"Türkiye"} date={data.result[0].date} day={data.result[0].day} />
                    <View style={{flex:1,paddingTop:18}}>
                    <SelectList 
            searchPlaceholder="Şehir ara..."
        setSelected={(val) => setSelectedCity(val)} 
        data={city} 
        placeholder="Şehir Seçiniz"
        maxHeight={120}
        boxStyles={{marginHorizontal:18}}
        dropdownStyles={{marginHorizontal:18}}
        notFoundText="Sonuç bulunamadı."
        save="value"
    />
    </View>
    </View>
                    <Summary degree={trundle(data.result[0].degree)+" C°"} status={firstChUp(data.result[0].description)} image={getImage(data.result[0].status)} />   
                    <View style={{paddingHorizontal:16,paddingVertical:15}}>
                    <Expected image={require('../../../assets/images/min.png')} title={'Minimum Sıcaklık'} value={`${trundle(data.result[0].min)} C°`}  />
                    <Expected image={require('../../../assets/images/max.png')} title={'Maksimum Sıcaklık'} value={`${trundle(data.result[0].max)} C°`}  />
                    <Expected image={require('../../../assets/images/night.png')} title={'Gece Sıcaklık'} value={`${trundle(data.result[0].night)} C°`}  />
                    <Expected image={require('../../../assets/images/humidity.png')} title={'Yağış İhtimali'} value={`%${trundle(data.result[0].humidity)}`}  />
                    </View>
                    <Button text={'Haftalık tahmin'} onPress={()=>navigation.navigate('Detail',{data:data} )}  />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    
        
        
     
    );
};

export default Home;