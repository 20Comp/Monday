import { StyleSheet, View, ImageBackground } from "react-native";

export default function ImgBakcg() {

    const linkImg = "https://i.ibb.co/dJMB1Lvj/coffee-Shop.jpg";
    return (
        <View style={styles.container}>

            <ImageBackground source={{ uri: linkImg }} style={styles.img} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alinItem: 'center',
        justifyContent: 'center',
    },

    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})