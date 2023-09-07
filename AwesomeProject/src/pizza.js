import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const PizzaTranslator=()=>{
    const [text,setText]=useState('');
    return(
        <View style={{padding:10}}>
        <TextInput
            style={{height:40}} 
            placeholder="Type here to translator"
            onChangeText={newText=>{setText(newText)}}
        />
        <Text style={{padding:10,fontSize:42}}>
        {text.split(' ').map((word)=>word&&'pizza').join(' ')}
        </Text>
        </View>
    )
}
export default PizzaTranslator