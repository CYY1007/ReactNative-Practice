import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, Dimensions} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { useEffect, useState } from 'react';

const {height:SCREEN_HEIGHIT, width:SCREEN_WIDTH} = Dimensions.get("window");
export default function App() {
  const [city,Setcity] = useState("Loading...");
  const [location,setLocation] = useState();
  const [ok,setOK] = useState(true);
  const ask = async () =>{
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
      }
  }
  useEffect(()=>{
    ask();
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
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Cloud</Text>          
        </View>
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
      flex:1,
      backgroundColor:"white",
      justifyContent: "center",
      alignItems:'center'
    },
    cityname:{
      fontSize:36,
      fontWeight: "600",
    },
    weather:{
      backgroundColor: "lightseagreen",
    },day:{
      width:SCREEN_WIDTH,
      alignItems:'center',
    },
    temp:{
      marginTop: 20,
        fontSize: 125,
        fontWeight: "600",
    },
    description:{
      marginTop:-15,
      fontSize: 45,
    }

});
