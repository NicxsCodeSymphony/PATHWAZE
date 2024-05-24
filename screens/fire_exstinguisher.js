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

const FireExstinguisher = ({ navigation }) => {
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
					<Text style={styles.text_dashboard}>FIRE EXTINGUISHER</Text>
				</View>
			</View>
			{(locationvalue == "cafeteria" ||
				locationvalue == "cashier" ||
				locationvalue == "v_pres_office" ||
				locationvalue == "pres_office" ||
				locationvalue == "accounting" ||
				locationvalue == "fb" ||
				locationvalue == "afa" ||
				locationvalue == "registrar_office" ||
				locationvalue == "clinic" ||
				locationvalue == "drrm" ||
				locationvalue == "psychology_office" ||
				locationvalue == "research_office") && (
				<View style={styles.body}>
					<ImageBackground
						style={styles.background_image}
						source={require("../assets/images/1st_floor.png")}
					>
						<Text style={styles.floor_text}>First Floor</Text>
						<View style={[styles.circle, styles.pos1]}></View>
						<View style={[styles.circle, styles.pos2]}></View>
						<View style={[styles.circle, styles.pos3]}></View>
						<View style={[styles.circle, styles.pos4]}></View>
					</ImageBackground>
				</View>
			)}

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
				locationvalue == "sao") && (
				<View style={styles.body}>
					<ImageBackground
						style={styles.background_image}
						source={require("../assets/images/2nd_floor.png")}
					>
						<Text style={styles.floor_text}>Second Floor</Text>
						<View style={[styles.circle, styles.pos5]}></View>
						<View style={[styles.circle, styles.pos6]}></View>
						<View style={[styles.circle, styles.pos7]}></View>
						<View style={[styles.circle, styles.pos7_7]}></View>
					</ImageBackground>
				</View>
			)}

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
				locationvalue == "cJe_dean") && (
				<View style={styles.body}>
					<ImageBackground
						style={styles.background_image}
						source={require("../assets/images/3rd_floor.png")}
					>
						<Text style={styles.floor_text}>Third Floor</Text>
						<View style={[styles.circle, styles.pos8]}></View>
						<View style={[styles.circle, styles.pos9]}></View>
						<View style={[styles.circle, styles.pos10]}></View>
						<View style={[styles.circle, styles.pos11]}></View>
					</ImageBackground>
				</View>
			)}

			{(locationvalue == "422" ||
				locationvalue == "423" ||
				locationvalue == "425" ||
				locationvalue == "426" ||
				locationvalue == "428" ||
				locationvalue == "429" ||
				locationvalue == "430" ||
				locationvalue == "avr" ||
				locationvalue == "Rooftop") && (
				<View style={styles.body}>
					<ImageBackground
						style={styles.background_image}
						source={require("../assets/images/4th_floor.png")}
					>
						<Text style={styles.floor_text}>Fourth Floor</Text>
						<View style={[styles.circle, styles.pos12]}></View>
						<View style={[styles.circle, styles.pos13]}></View>
						<View style={[styles.circle, styles.pos14]}></View>
					</ImageBackground>
				</View>
			)}

			{(locationvalue == "532" ||
				locationvalue == "533" ||
				locationvalue == "534" ||
				locationvalue == "535" ||
				locationvalue == "536" ||
				locationvalue == "dyvl") && (
				<View style={styles.body}>
					<ImageBackground
						style={styles.background_image}
						source={require("../assets/images/5th_floor.png")}
					>
						<Text style={styles.floor_text}>Fifth Floor</Text>
						<View style={[styles.circle, styles.pos15]}></View>
					</ImageBackground>
				</View>
			)}
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
		top: 180,
		left: 20,
	},

	pos2: {
		top: 110,
		left: 200,
	},

	pos3: {
		top: 200,
		left: 240,
	},

	pos4: {
		top: 150,
		left: 50,
	},

	pos5: {
		top: 300,
		left: 230,
	},

	pos6: {
		top: 190,
		left: 60,
	},

	pos7: {
		top: 340,
		left: 60,
	},

	pos7_7: {
		top: 0,
		left: 180,
	},

	pos8: {
		top: 300,
		left: 230,
	},

	pos9: {
		top: 190,
		left: 60,
	},

	pos10: {
		top: 260,
		left: 60,
	},

	pos11: {
		top: 0,
		left: 200,
	},

	pos12: {
		top: 190,
		left: 70,
	},

	pos13: {
		top: 350,
		left: 70,
	},

	pos14: {
		top: 50,
		left: 200,
	},

	pos15: {
		top: 135,
		left: 220,
	},
});

export default FireExstinguisher;
