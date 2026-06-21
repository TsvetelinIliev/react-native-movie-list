
import { useState } from 'react';
import { Text, View, TextInput,Button } from 'react-native';
import TodoItem from './components/TodoItem';


export default function App() {

	const [text,setText] = useState('');
	const [error,setError] = useState(null);
	const [todos,setTodos] = useState([
		{id: 1,isComplited: false,text: 'Go to bed'},
		{id: 2,isComplited: false,text: 'Make your bad'}
	]);

	const textChangeHandler = (value) => {
		setText(value);

	};

	const createTodoHandler = () => {

		if(!text) {
			return setError('Todo text is requred!');
		};

		if(text.length < 3){

			return setError('Text is too short!')
		}

		

		const lastTodoId = todos[todos.length -1]?.id || 0;
		const newTodo = {
			id: lastTodoId + 1,
			text: text,
			isCompleted: false,
		};

		setError(null);
		setTodos(oldTodo => [...oldTodo,newTodo]);
		setText('');
	};

	const toggleTodoHandler = (todoId) => {
		setTodos(todos => todos.map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted} : todo));

	};

	const deleteTodoHandler = (todoId) => {

		setTodos(todos.filter(todo => todo.id !== todoId));

	};
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

			{error && (
				<Text style={{textAlign: 'center' ,color: 'red'}} >{error}</Text>
			)}
			<View style={{ width: '100%' ,}} >
				<Text>
					{todos.map(todo => <TodoItem key={todo.id} {...todo} onDone={toggleTodoHandler} onDelete={deleteTodoHandler} />)}
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




