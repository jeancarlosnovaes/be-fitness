import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	title: {
		flexDirection: "row",
		padding: 10,
		marginTop: 30,
	},

	titleText: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 30,
		lineHeight: 41,
		color: "#26262B",
	},

	buttonView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	button: {
		backgroundColor: "#DFDFE6",
		borderRadius: 2,
		padding: 10,
	},

	buttonIcon: {
		color: "#5063EE",
	},

	basicStats: {
		flex: 1,
		flexDirection: "row",
		marginTop: 2,
	},

	completed: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 0,
	},

	completedWorkoutNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	completedWorkoutText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	tonnage: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},

	tonnageLiftedNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	tonnageLiftedUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#26262B",
	},

	tonnageLiftedText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	currentWeight: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
		height: 100,
		alignSelf: "stretch",
		borderColor: "#DFDFE6",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRightWidth: 0,
		borderLeftWidth: 1,
	},

	currentWeightNumber: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 29,
		color: "#484856",
		textAlign: "left",
	},

	currentWeightUnits: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		color: "#26262B",
	},

	currentWeightText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 13,
		lineHeight: 16,
		color: "#26262B",
		textAlign: "left",
	},

	previewsWorkout: {
		flexDirection: "row",
		alignSelf: "stretch",
		maxHeight: 99,
		borderBottomColor: "#DFDFE6",
		borderBottomWidth: 1,
		paddingBottom: 10,
	},

	date: {
		backgroundColor: "#5063EE",
		borderRadius: 2,
		padding: 10,
		marginLeft: 2,
		marginBottom: 5,
		marginTop: 5,
		marginRight: 2,
	},

	dateNumber: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 18,
		color: "#fff",
	},

	dateText: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		color: "#FEFEFE",
		textTransform: "uppercase",
	},

	previewsTitle: {
		padding: 2,
		marginLeft: 5,
	},

	previewsTitleText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		color: "#26262B",
		marginBottom: 2,
	},

	previewsExerciseTitle: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 18,
		lineHeight: 22,
		color: "#23253A",
		marginBottom: 2,
	},

	previewsInfo: {
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		lineHeight: 20,
		color: "#26262B",
	},

	previewsWorkoutIcon: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},

	previewsIcon: {
		color: "#5063EE",
		padding: 20,
	},

	myWorkouts: {
		flex: 1,
		maxHeight: 327,
		borderRadius: 2,
		borderWidth: 1,
		borderColor: "#23253A",
		margin: 10,
	},

	myWorkoutsInfoText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		lineHeight: 17,
		textAlign: "center",
		color: "#26262B",
		margin: 10,
		padding: 5,
	},

	createWorkouts: {
		margin: 10,
		alignItems: "center",
	},

	buttonCreateWorkouts: {
		backgroundColor: "#23253A",
		paddingBottom: 10,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},

	buttonCreateWorkoutsText: {
		fontStyle: "normal",
		fontWeight: "300",
		fontSize: 14,
		lineHeight: 17,
		textAlign: "center",
		color: "#fff",
		textTransform: "uppercase",
	},
});

export default styles;