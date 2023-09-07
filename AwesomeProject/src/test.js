import { SafeAreaView, StyleSheet ,Text} from "react-native";

function Test(){
    return(
        <>
        <SafeAreaView style={[styles.safeAreaView,{backgroundColor:'blue'}]}>
            <Text style={[styles.text,{color:'white'}]}>
                Hello StyleSheet world!
            </Text>
        </SafeAreaView>
        </>
    )
}
export default Test;
const styles=StyleSheet.create({
    safeAreaView:{flex:1,alignItems:'center',justifyContent:'center'},text:{fontSize:20}
})