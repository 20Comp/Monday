import { StyleSheet, View, Text, Image } from "react-native";


export default function ImgLog(){

    const linkLogo = require('../Images/Mariposa-Poly.jpg');
    return(
        <View style={styles.container}>

            <Image source={{uri: linkLogo}} style={styles.imglog}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
    },

    imglog:{
        flex: 1,
        height: 300,
        width: 300,

    },


});