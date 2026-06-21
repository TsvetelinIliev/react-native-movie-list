import { Button, Text, View } from "react-native";


export default function TodoItem({
    id,
    text,
    isCompleted,
    onDone,
    onDelete}) {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',width: "100%" }} >
            <Text style={{fontSize: 20,textDecorationLine: isCompleted ? 'line-through' : 'none'}} >{text}</Text>

            <View style={{ flexDirection: "row",gap: 5,marginBottom: 5}} >
                <Button   title={isCompleted ? 'Undone' : 'Done'} onPress={() => onDone(id)} />
                <Button  title="Delete" onPress={() =>onDelete(id)}/>
            </View>
        </View>
    )
}