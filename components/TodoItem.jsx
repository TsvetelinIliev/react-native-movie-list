import { Button, Text, View } from "react-native";


export default function TodoItem({id,text,isComplied,onDone}) {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',width: "100%" }} >
            <Text style={{fontSize: 20,}} >{text}</Text>

            <View style={{ flexDirection: "row",gap: 5,marginBottom: 5}} >
                <Button   title="Done" onPress={() => onDone(id)} />
                <Button  title="Delete"/>
            </View>
        </View>
    )
}