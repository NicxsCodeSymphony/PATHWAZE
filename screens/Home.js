import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import {
	Fontisto,
	FontAwesome6,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
	{ label: "Accounting", value: "accounting" },
	{ label: "AFA & NSTP Office", value: "afa" },
	{ label: "Audio Visual Room", value: "avr" },
	{ label: "Cafeteria", value: "cafeteria" },
	{ label: "Cashier", value: "cashier" },
	{ label: "CJE Dean Office & Graduate School Office", value: "cJe_dean" },
	{ label: "CCS DEAN Office", value: "ccs_dean" },
	{ label: "CCS Faculty Office", value: "ccs_faculty" },
	{ label: "clinic", value: "clinic" },
	{ label: "COC Dean's Office", value: "coc_dean" },
	{ label: "COC Faculty Office", value: "coc_faculty" },
	{ label: "College Library", value: "college_lib" },
	{ label: "College Library Extension", value: "college_lib_ex" },
	{ label: "Computer Laboratory 1", value: "com_lab_1" },
	{ label: "Computer Laboratory 2", value: "com_lab_2" },
	{ label: "Computer Laboratory 3", value: "com_lab_3" },
	{ label: "Computer Laboratory 4", value: "com_lab_4" },
	{ label: "CR - male", value: "cr_male" },
	{ label: "CR - female", value: "cr_female" },
	{ label: "DRRM Office", value: "drrm" },
	{ label: "DYVL", value: "dyvl" },
	{ label: "Food Laboratory", value: "fb" },
	{ label: "Principal's Office", value: "principal" },
	{ label: "President's Office", value: "pres_office" },
	{ label: "Property Custodian Office", value: "prop_custodian" },
	{ label: "Psychology Faculty Office", value: "psychology_office" },
	{ label: "Registrar Office", value: "registrar_office" },
	{ label: "Research Office", value: "research_office" },
	{ label: "Rooftop", value: "Rooftop" },
	{ label: "Room 203", value: "203" },
	{ label: "Room 204", value: "204" },
	{ label: "Room 205", value: "205" },
	{ label: "Room 206", value: "206" },
	{ label: "Room 207", value: "207" },
	{ label: "Room 208", value: "208" },
	{ label: "Room 209", value: "209" },
	{ label: "Room 312", value: "312" },
	{ label: "Room 313", value: "313" },
	{ label: "Room 314", value: "314" },
	{ label: "Room 315", value: "315" },
	{ label: "Room 316", value: "316" },
	{ label: "Room 317", value: "317" },
	{ label: "Room 318", value: "318" },
	{ label: "Room 319", value: "319" },
	{ label: "Room 422", value: "422" },
	{ label: "Room 423", value: "423" },
	{ label: "Room 424", value: "424" },
	{ label: "Room 425", value: "425" },
	{ label: "Room 426", value: "426" },
	{ label: "Room 427", value: "427" },
	{ label: "Room 428", value: "428" },
	{ label: "Room 429", value: "429" },
	{ label: "Room 532", value: "532" },
	{ label: "Room 533", value: "533" },
	{ label: "Room 534", value: "534" },
	{ label: "Room 535", value: "535" },
	{ label: "Room 536", value: "536" },
	{ label: "Scholarship Office", value: "scholarship_office" },
	{ label: "Science Laboratory", value: "sci_lab" },
	{ label: "Speech Laboratory", value: "speech_lab" },
	{ label: "Student Affair Office", value: "sao" },
	{ label: "Vice President's Office", value: "v_pres_office" },
];

const HomeScreen = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		plusrounded_bold: require("../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
	});

	const [locationvalue, setLocationValue] = useState(null);
	const [destinationvalue, setDestinationValue] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [unhide, setunhide] = useState(true);

	useEffect(() => {
		const getLocation_Destination = async () => {
			if (locationvalue) {
				await AsyncStorage.setItem("location", locationvalue);
				setunhide(false);
			}

			if (destinationvalue) {
				await AsyncStorage.setItem("destination", destinationvalue);
			}

			if (locationvalue && destinationvalue) {
				navigation.push("PathFinder");
			}
			// // const location = await AsyncStorage.getItem("location");

			// console.log(location);
		};

		getLocation_Destination();
	});

	const choose_location = async () => {
		setLocationValue("");
		setunhide(true);
	};

	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View>
			<View style={styles.headers}>
				<View style={styles.pathwaze}>
					<Fontisto
						style={styles.fire_icon}
						name="fire"
						size={24}
						color="white"
					/>
					<Text style={styles.text_pathwaze}>PATHWAZE</Text>
				</View>
				<View style={styles.dashboard}>
					<Text style={styles.text_dashboard}>DASHBOARD</Text>
					<TouchableOpacity
						onPress={() => navigation.push("Stt")}
					></TouchableOpacity>
				</View>
			</View>
			<View style={styles.body}>
				<ImageBackground
					style={styles.background_image}
					source={require("../assets/images/crmc_build.png")}
				>
					<View style={styles.square}>
						<Text></Text>
						<View style={styles.image}>
							<ImageBackground
								style={styles.background_image2}
								source={require("../assets/images/crmc_build.png")}
							>
								<View style={styles.crmctext_container}>
									<TouchableOpacity
										style={styles.home_container}
										onPress={() => choose_location()}
									>
										<Fontisto
											style={styles.home_icon}
											name="home"
											size={25}
											color="white"
										/>
									</TouchableOpacity>
									<View>
										<Text style={styles.crmc_text}>
											CEBU ROOSEVELT MEMORIAL
										</Text>
										<Text style={styles.crmc_text}>COLLEGES</Text>
									</View>
								</View>
								{/* {renderLabel()} */}
								{unhide && (
									<Dropdown
										style={[
											styles.dropdown,
											isFocus && { borderColor: "blue" },
										]}
										placeholderStyle={styles.placeholderStyle}
										selectedTextStyle={styles.selectedTextStyle}
										inputSearchStyle={styles.inputSearchStyle}
										iconStyle={styles.iconStyle}
										iconColor="white"
										data={data}
										search
										maxHeight={300}
										labelField="label"
										valueField="value"
										placeholder={!isFocus ? "Select Current Location" : "..."}
										searchPlaceholder="Search..."
										value={locationvalue}
										onFocus={() => setIsFocus(true)}
										onBlur={() => setIsFocus(false)}
										onChange={(item) => {
											setLocationValue(item.value);
											setIsFocus(false);
										}}
									/>
								)}

								{locationvalue && (
									<Dropdown
										style={[
											styles.dropdown,
											isFocus && { borderColor: "blue" },
										]}
										placeholderStyle={styles.placeholderStyle}
										selectedTextStyle={styles.selectedTextStyle}
										inputSearchStyle={styles.inputSearchStyle}
										iconStyle={styles.iconStyle}
										iconColor="white"
										data={data}
										search
										maxHeight={300}
										labelField="label"
										valueField="value"
										placeholder={!isFocus ? "Select Destination" : "..."}
										searchPlaceholder="Search..."
										value={destinationvalue}
										onFocus={() => setIsFocus(true)}
										onBlur={() => setIsFocus(false)}
										onChange={(item) => {
											setDestinationValue(item.value);
											setIsFocus(false);
										}}
									/>
								)}
							</ImageBackground>
						</View>
					</View>
					{locationvalue && (
						<View style={styles.footer}>
							<View style={styles.icon_group}>
								<TouchableOpacity
									onPress={() => navigation.push("FireExstinguisher")}
								>
									<FontAwesome6
										style={styles.fire_extinguisher}
										name="fire-extinguisher"
										size={32}
										color="white"
									/>
									<Text style={styles.icon_text}>Fire Extinguisher</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => navigation.push("FirstAid")}>
									<Fontisto
										style={styles.first_aid}
										name="first-aid-alt"
										size={32}
										color="white"
									></Fontisto>
									<Text style={styles.icon_text}>First Aid Kit</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => navigation.push("FireExit")}>
									<MaterialCommunityIcons
										style={styles.fire_exit}
										name="exit-run"
										size={32}
										color="white"
									/>

									<Text style={styles.icon_text}>Fire Exit</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				</ImageBackground>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headers: {
		flexDirection: "row",
		backgroundColor: "white",
	},
	pathwaze: {
		backgroundColor: "red",
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
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		marginLeft: 10, // Adding some margin to space out the icon and text
	},
	dashboard: {
		backgroundColor: "white",
		// padding: 20,
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	text_dashboard: {
		color: "red",
		fontFamily: "plusrounded_bold",
		fontSize: 18,
		left: -20,
	},

	//body
	body: {
		height: "100%",
		width: "100%",
	},

	background_image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	square: {
		top: -50,
		height: "50%",
		width: "80%",
		alignSelf: "center",
		backgroundColor: "white",
	},

	image: {
		top: 5,
		alignSelf: "center",
		width: "90%",
		height: "90%",
		borderRadius: 10,
		overflow: "hidden", // Ensures the border radius is applied to the image
	},

	background_image2: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	crmctext_container: {
		top: -140,
		left: 15,
		flexDirection: "row",
	},

	home_container: {
		height: 40,
		width: 40,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},

	crmc_text: {
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 12,
		left: 15,
	},

	//dropdown

	dropdown: {
		height: 40,
		width: 240,
		top: -100,
		alignSelf: "center",
		borderColor: "gray",
		// borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: "white",
	},

	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 12,
	},
	placeholderStyle: {
		fontSize: 14,
	},
	selectedTextStyle: {
		fontSize: 14,
	},
	iconStyle: {
		width: 25,
		height: 40,
		left: 8,
		borderRadius: 8,
		backgroundColor: "red",
		paddingRight: 60,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},

	// footer
	footer: {
		top: 50,
		alignSelf: "baseline",
		backgroundColor: "red",
		width: "100%",
		height: "10%",
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
	},

	icon_group: {
		flexDirection: "row",
		alignSelf: "center",
		gap: 40,
		right: 5,
		top: 10,
	},

	icon_text: {
		//
		color: "white",
		fontFamily: "plusrounded_bold",
		fontSize: 15,
		alignSelf: "center",
	},

	fire_extinguisher: {
		left: 50,
	},

	first_aid: {
		left: 30,
	},

	fire_exit: {
		left: 15,
	},
});

export default HomeScreen;
