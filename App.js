import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, Dimensions,ActivityIndicator} from 'react-native';
import { useEffect, useState } from 'react';
import {Fontisto} from "@expo/vector-icons"
const API_KEY = `a2fe116f4a659e0ff1ae7cdc8df0e6b3`;

const icons = {
  Clouds: "cloudy",
  Clear : "day-sunny",
  Atmosphere:"cloudy-gusts",
  Snow:"snow",
  Rain:"rains",
  Drizzle:"rain",
  Thunderstorm:"lightnings",
}
const {height:SCREEN_HEIGHIT, width:SCREEN_WIDTH} = Dimensions.get("window");
export default function App() {
  const [city,Setcity] = useState("Loading...");
  const [days,setDays] = useState([]);
  const [ok,setOK] = useState(true);
  const getWeather = async () =>{
    let location = null;
    const {granted:permissioin} = await Location.requestForegroundPermissionsAsync();
    console.log(permissioin);
    if(!permissioin){
      setOK(false);
    }
    else{
      const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
       location= await Location.reverseGeocodeAsync({latitude,longitude},
        {useGoogleMaps: false});
        Setcity(location[0].city)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
        const json = await response.json();
        setDays(json.daily);
      }
  }
  useEffect(()=>{
    getWeather();
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text style={styles.cityname}>{city}</Text>
      </View>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
       contentContainerStyle={styles.weather}>
        {days.length === 0 ? 
        <View style={styles.day}>
          <ActivityIndicator color="white" size="large"/>
        </View> : 
        days.map((day, index) =>
        <View key={index} style={styles.day}>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-between",width: "100%",}}>
            <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
            <Fontisto name={icons[day.weather[0].main]} size={72} color="white" style={styles.icon}/>
          </View>
          <Text style={styles.description}>{day.weather[0].main}</Text>
          <Text style={styles.minides}>{day.weather[0].description}</Text>
        </View>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightseagreen",
    },
    location: {
      flex:0.7,
      backgroundColor:"white",
      justifyContent: "center",
      alignItems:'center'
    },
    cityname:{
      fontSize:46,
      fontWeight: "600",
      color: "teal",
    },
    weather:{
      backgroundColor: "lightseagreen",
    },day:{
      width:SCREEN_WIDTH,
      alignItems: "flex-start",
      paddingHorizontal: 20,
    },
    temp:{
      marginTop: 20,
        fontSize: 100,
        fontWeight: "600",
        color: "white",
    },
    description:{
      marginTop:-10,
      fontSize: 30,
      color: "white",
      fontWeight: "500",
    },
    minides : {
      fontSize: 25,
      marginTop: -5,
      color: "white",
      fontWeight: "500",
    },
    icon:{
      marginTop: 50,
      marginRight: 90,
    }

});
