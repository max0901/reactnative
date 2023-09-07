import { Image, ScrollView, StyleSheet, Text } from "react-native"


const Scroll=()=>{
    return(
        <>
        <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
            <Image source={require('../goodlogo.png')} style={styles.img}/>
        </ScrollView>
        </>
    
    )
}
export default Scroll

 const styles=StyleSheet.create({
    img:{
        width:96,
        height:96,

    }
 })