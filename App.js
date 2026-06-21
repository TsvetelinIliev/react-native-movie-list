
import { useState } from 'react';
import { Text, View, TextInput,Button } from 'react-native';
import TodoItem from './components/TodoItem';


export default function App() {

	const [text,setText] = useState('');
	const [todos,setTodos] = useState([
		{id: 1,isComplited: false,text: 'Go to bed'},
		{id: 2,isComplited: false,text: 'Make your bad'}
	]);

	const textChangeHandler = (value) => {
		setText(value);

	};

	const createTodoHandler = () => {

		if(!text) {
			return alert('Missing text!')
		};
		const lastTodoId = todos[todos.length -1]?.id || 0;
		const newTodo = {
			id: lastTodoId + 1,
			text: text,
			isComplited: false,
		};

		setTodos(oldTodo => [...oldTodo,newTodo]);
		setText('');
	};

	const toggleTodoHandler = (todoId) => {
		alert(todoId);

	}
  return (
		<View style={styles.body} >
			<View  >
				<Text style={styles.heading} >Heading</Text>

			</View>
			<View style={styles.control} >
				<TextInput 
				placeholder='Go to gym!'
				value={text}
				onChangeText={textChangeHandler}
				onSubmitEditing={createTodoHandler}
				
				/>

				<Button  title='Create' onPress={createTodoHandler} />

			</View>
			<View style={{ width: '100%' ,}} >
				<Text>
					{todos.map(todo => <TodoItem key={todo.text} {...todo} onDone={toggleTodoHandler} />)}
				</Text>

			</View>



		</View>
	);
};


const styles = {

	body: {
		padding: 20,
		alignItems: 'center',
		gap: 30,



	},
	heading: {
		fontSize: 30,
		marginTop: 30,
		fontWeight: 'bold',
		

	},
	control: {
		flexDirection: 'row',
		borderWidth: 1,
		justifyContent: 'space-between',
		width: '100%',
		borderRadius: 5,
		


	}

}




