import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, Dimensions} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

const {height:SCREEN_HEIGHIT, width:SCREEN_WIDTH} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text style={styles.cityname}>Location!</Text>
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
