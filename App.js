import { StyleSheet, View, Text } from "react-native";
import ImgBakcg from "./src/components/ImgBack";
import ImgLog from "./src/components/ImgLogo";



export default function App() {
  return (
    <View style={styles.container}>
      
      <ImgBakcg>

        <Text style={styles.text}>Olá Mundo!</Text>
      
      </ImgBakcg>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alingItem: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 35,
    color: 'blue',
    textAlign: 'center',
    alingItem: 'center',
    justifycontent: 'center',
  },


});