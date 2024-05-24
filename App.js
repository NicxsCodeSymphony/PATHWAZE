// App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './pages/Home';
// import VoiceScreen from './pages/Voice';
// import First from './maps/first';
// import FireExstinguisher from "./screens/fire_exstinguisher";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
//         <Stack.Screen name="VoiceScreen" component={VoiceScreen} options={{headerShown: false}} />
//         <Stack.Screen name="First" component={First} options={{headerShown: false}} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React, { useState, useEffect } from "react";
import { View, Text, BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import FireExstinguisher from "./screens/fire_exstinguisher";
import FireExit from "./screens/fire_exit";
import FirstAid from "./screens/first_aid";
import PathFinder from "./screens/path";

const Stack = createNativeStackNavigator();

function App() {
	const navigationRef = React.useRef(null);

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="FireExstinguisher" component={FireExstinguisher} />
				<Stack.Screen name="FirstAid" component={FirstAid} />
				<Stack.Screen name="FireExit" component={FireExit} />
				<Stack.Screen name="PathFinder" component={PathFinder} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
