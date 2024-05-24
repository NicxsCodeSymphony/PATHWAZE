import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import {
	Fontisto,
	FontAwesome6,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FirstAid = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		plusrounded_bold: require("../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
	});

	const [locationvalue, setLocationValue] = useState(null);

	useEffect(() => {
		const getLocation_Destination = async () => {
			setLocationValue(await AsyncStorage.getItem("location"));
		};

		getLocation_Destination();
	});

	const go_home = async () => {
		await AsyncStorage.removeItem("location");
		navigation.push("Home");
	};

	// Show a loading indicator while the fonts are loading
	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View>
			<View style={styles.headers}>
				<View style={styles.pathwaze}>
					<TouchableOpacity onPress={() => go_home()}>
						<Fontisto
							style={styles.fire_icon}
							name="home"
							size={24}
							color="red"
						/>
					</TouchableOpacity>

					<Text style={styles.text_pathwaze}>PATHWAZE</Text>
				</View>
				<View style={styles.dashboard}>
					<Text style={styles.text_dashboard}>FIRE EXIT</Text>
				</View>
			</View>

			<View style={styles.body}>
				<ImageBackground
					style={styles.background_image}
					source={require("../assets/images/1st_floor.png")}
				>
					<Text style={styles.floor_text}>First Floor</Text>
					<View style={[styles.circle, styles.pos1]}></View>
				</ImageBackground>
			</View>
		</View>
	);
};

const windowWidth = Dimensions.get("window").width;
const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;
const styles = StyleSheet.create({
	headers: {
		flexDirection: "row",
		backgroundColor: "red",
	},
	pathwaze: {
		backgroundColor: "white",
		padding: 20,
		width: "50%",
		flexDirection: "row",
		alignItems: "center",
		borderBottomRightRadius: 70,
	},
	fire_icon: {
		paddingRight: 10,
		paddingLeft: 10,
	},
	text_pathwaze: {
		color: "red",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		marginLeft: 10, // Adding some margin to space out the icon and text
	},
	dashboard: {
		backgroundColor: "red",
		padding: 20,
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	text_dashboard: {
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		left: -40,
	},

	//body
	body: {
		height: 800,
		width: windowWidth,
		// borderWidth: 2,
		borderColor: "#000",
	},

	background_image: {
		flex: 1,
		resizeMode: "contain",
		height: imageHeight,
		width: imageWidth,
	},

	circle: {
		borderWidth: 4,
		borderColor: "red",
		width: 60,
		height: 60,
		borderRadius: 50,

		backgroundColor: "rgba(128, 128, 128, 0.3)",
	},

	floor_text: {
		color: "white",
		position: "absolute",
		fontFamily: "plusrounded_bold",
		fontSize: 24,
		top: 20,
		left: 30,
	},

	pos1: {
		top: 260,
		left: 20,
	},
});

export default FirstAid;
