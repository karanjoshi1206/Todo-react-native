import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	Alert,
	FlatList,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import * as location from "expo-location";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import SandBox from "./components/sandbox";

export default function App() {
	const [todos, setTodos] = useState([
		{
			text: "Buy mangoes",
			key: "1",
		},
		{
			text: "Buy cofee",
			key: "2",
		},
		{
			text: "Buy cream",
			key: "3",
		},
	]);
	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};
	const addTodo = (text, setText) => {
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [{ text: text, key: Math.random().toString() }, ...prevTodos];
			});
		} else {
			Alert.alert("OOPS!!", "Todos much be atleast 4 chars long", [
				{
					text: "Understood",
					onPress: () => console.log("alert closed"),
				},
			]);
		}
	};
	return (
		// <View style={styles.container}>
		// 	<TextInput
		// 		style={styles.inputStyle}
		// 		placeholder='Enter your name'
		// 		onChangeText={(val) => setName(val)}
		// 	/>
		// 	<TextInput
		// 		keyboardType='number-pad'
		// 		style={styles.inputStyle}
		// 		placeholder='Enter your age'
		// 		onChangeText={(val) => setAge(val)}
		// 	/>
		// 	<Text style={styles.boldText}>
		// 		Hello {name} {age}
		// 	</Text>
		// <View style={styles.listView}>
		// {
		/* <ScrollView>
			{data.map((item) => (
				<Text style={styles.listStyle} key={item.id}>
					{item.name}
				</Text>
			))}
			</ScrollView> */
		// }
		// 	<FlatList
		// 		data={data}
		// 		renderItem={({ item }) => (
		// 			<TouchableOpacity onPress={() => pressHandler(item.id)}>
		// 				<Text style={styles.listStyle}>{item.name}</Text>
		// 			</TouchableOpacity>
		// 		)}
		// 	/>
		// </View>
		// </View>
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				{/* header  */}
				<Header />
				<View style={styles.content}>
					{/* {Todo form} */}
					<AddTodo addTodo={addTodo} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
		// <SandBox />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
