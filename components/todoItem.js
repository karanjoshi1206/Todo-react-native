import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
	return (
		<View style={styles.item}>
			<Text>{item.text}</Text>

			<TouchableOpacity
				onPress={() => {
					pressHandler(item.key);
				}}>
				<AntDesign name='delete' size={24} color='black' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10,
	},
});
