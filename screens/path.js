import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FloorMap1 from "./floors/floor_1";
import FloorMap2 from "./floors/floor_2";
import FloorMap3 from "./floors/floor_3";
import FloorMap4 from "./floors/floor_4";
import FloorMap5 from "./floors/floor_5";

const PathFinder = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		plusrounded_bold: require("../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
	});

	const [locationvalue, setLocationValue] = useState(null);
	const [destinationvalue, setDestinationValue] = useState(null);

	useEffect(() => {
		const getLocation_Destination = async () => {
			setLocationValue(await AsyncStorage.getItem("location"));
			setDestinationValue(await AsyncStorage.getItem("destination"));
		};

		getLocation_Destination();
	}, []);

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
					<Text style={styles.text_dashboard}>MAPS</Text>
				</View>
			</View>

			<View style={styles.body}>
				{(destinationvalue == "cafeteria" ||
					destinationvalue == "cashier" ||
					destinationvalue == "v_pres_office" ||
					destinationvalue == "pres_office" ||
					destinationvalue == "accounting" ||
					destinationvalue == "fb" ||
					destinationvalue == "afa" ||
					destinationvalue == "registrar_office" ||
					destinationvalue == "clinic" ||
					destinationvalue == "drrm" ||
					destinationvalue == "psychology_office" ||
					destinationvalue == "research_office") && <FloorMap1 />}

				{(locationvalue == "203" ||
					locationvalue == "204" ||
					locationvalue == "205" ||
					locationvalue == "206" ||
					locationvalue == "207" ||
					locationvalue == "208" ||
					locationvalue == "209" ||
					locationvalue == "principal" ||
					locationvalue == "speech_lab" ||
					locationvalue == "prop_custodian" ||
					locationvalue == "coc_dean" ||
					locationvalue == "coc_faculty" ||
					locationvalue == "com_lab_1" ||
					locationvalue == "com_lab_2" ||
					locationvalue == "com_lab_3" ||
					locationvalue == "com_lab_4" ||
					locationvalue == "sao") && <FloorMap2 />}

				{(locationvalue == "312" ||
					locationvalue == "313" ||
					locationvalue == "314" ||
					locationvalue == "315" ||
					locationvalue == "316" ||
					locationvalue == "317" ||
					locationvalue == "318" ||
					locationvalue == "319" ||
					locationvalue == "ccs_dean" ||
					locationvalue == "ccs_faculty" ||
					locationvalue == "scholarship_office" ||
					locationvalue == "sci_lab" ||
					locationvalue == "college_lib" ||
					locationvalue == "college_lib_ex" ||
					locationvalue == "cJe_dean") && <FloorMap3 />}

				{(locationvalue == "422" ||
					locationvalue == "423" ||
					locationvalue == "425" ||
					locationvalue == "424" ||
					locationvalue == "426" ||
					locationvalue == "427" ||
					locationvalue == "428" ||
					locationvalue == "429" ||
					locationvalue == "avr" ||
					locationvalue == "Rooftop") && <FloorMap4 />}

				{(locationvalue == "532" ||
					locationvalue == "533" ||
					locationvalue == "534" ||
					locationvalue == "535" ||
					locationvalue == "536" ||
					locationvalue == "dyvl") && <FloorMap5 />}
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
		fontSize: 16,
		left: -20,
	},
	body: {
		height: 800,
		width: windowWidth,
		borderColor: "#000",
	},
});

export default PathFinder;
