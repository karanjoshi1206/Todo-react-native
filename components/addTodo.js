import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";
export default function AddTodo({ addTodo }) {
	const [text, setText] = useState("");
	const changeHandler = (val) => {
		setText(val);
	};
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='New Todo...'
				onChangeText={changeHandler}
			/>
			<Button
				onPress={() => addTodo(text, setText)}
				title='Add todo'
				color='coral'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
});
