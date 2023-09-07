import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

const ListView=()=>{
    const styles=StyleSheet.create({
        container:{
            flex:1,
            paddingTop:22,
        },
        item:{
            padding:10,
            fontSize:20,
            height:44
        }
    })
    return(
        <View style={styles.container}>
            <FlatList
            //data와 renderItem 필수 
                    data={[
                        {key:'Devin'},
                        {key:'max'},
                        {key:'Djackson'},
                        {key:'james'},
                        {key:'john'},
                        {key:'jimmiy'},
                    ]}
                    renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
            />
            <SectionList
                sections={[
                    {title:'D',data:['Devin','Dan','Dominic']},
                    {title:'J',data:["Jackson",'James','Jimmy']}
                ]}
                renderItem={({item})=><Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section})=><Text>{section.title}</Text>}
                keyExtractor={(item,index)=>index}
            />
        </View>
    )
}
export default ListView;