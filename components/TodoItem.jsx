import { Button, Text, View } from "react-native";


export default function TodoItem({text,isComplied,onDune}) {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',width: "100%" }} >
            <Text style={{fontSize: 20,}} >{text}</Text>

            <View style={{ flexDirection: "row",gap: 5,marginBottom: 5}} >
                <Button   title="Done" onPress={() => onDune()} />
                <Button  title="Delete"/>
            </View>
        </View>
    )
}