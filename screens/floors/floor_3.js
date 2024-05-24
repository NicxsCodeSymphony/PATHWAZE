import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Svg, { Rect, Line, Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rows = 50;
const cols = 40;
const cellSize = 7.8;

const createGrid = (rows, cols, obstacles) => {
	const grid = [];
	for (let row = 0; row < rows; row++) {
		const currentRow = [];
		for (let col = 0; col < cols; col++) {
			currentRow.push({
				x: col,
				y: row,
				isWalkable: !obstacles.some(([ox, oy]) => ox === col && oy === row),
				g: 0,
				h: 0,
				f: 0,
				previous: null,
			});
		}
		grid.push(currentRow);
	}
	return grid;
};

const heuristic = (nodeA, nodeB) => {
	return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
};

const aStar = (startNode, endNode, grid) => {
	const openSet = [startNode];
	const closedSet = [];

	while (openSet.length > 0) {
		let lowestIndex = 0;
		for (let i = 0; i < openSet.length; i++) {
			if (openSet[i].f < openSet[lowestIndex].f) {
				lowestIndex = i;
			}
		}

		let current = openSet[lowestIndex];

		if (current === endNode) {
			let path = [];
			let temp = current;
			while (temp.previous) {
				path.push(temp);
				temp = temp.previous;
			}
			return path.reverse();
		}

		openSet.splice(lowestIndex, 1);
		closedSet.push(current);

		let neighbors = getNeighbors(current, grid);
		for (let neighbor of neighbors) {
			if (!closedSet.includes(neighbor) && neighbor.isWalkable) {
				let tentativeG = current.g + 1;

				if (!openSet.includes(neighbor)) {
					openSet.push(neighbor);
				} else if (tentativeG >= neighbor.g) {
					continue;
				}

				neighbor.g = tentativeG;
				neighbor.h = heuristic(neighbor, endNode);
				neighbor.f = neighbor.g + neighbor.h;
				neighbor.previous = current;
			}
		}
	}

	return []; // No path found
};

const getNeighbors = (node, grid) => {
	const neighbors = [];
	const { x, y } = node;

	if (grid[y - 1] && grid[y - 1][x]) neighbors.push(grid[y - 1][x]); // up
	if (grid[y + 1] && grid[y + 1][x]) neighbors.push(grid[y + 1][x]); // down
	if (grid[y] && grid[y][x - 1]) neighbors.push(grid[y][x - 1]); // left
	if (grid[y] && grid[y][x + 1]) neighbors.push(grid[y][x + 1]); // right

	return neighbors;
};

const FloorMap3 = () => {
	const obstacles = useMemo(() => {
		const obs = [
			[9, 45],
			[10, 45],
			[10, 46],
			[10, 47],
			[10, 48],
			[10, 49],
		];
		for (let i = 10; i <= 40; i++) {
			obs.push([i, 8]);
		}

		for (let i = 9; i <= 21; i++) {
			obs.push([10, i]);
		}

		for (let i = 10; i <= 40; i++) {
			obs.push([i, 21]);
		}

		for (let i = 10; i <= 45; i++) {
			obs.push([7, i]);
			if (i % 3 !== 0) {
				i++;
			}
		}

		for (let i = 10; i <= 45; i++) {
			obs.push([7, i]);
			if (i % 3 !== 0) {
				i++;
			}
		}

		for (let i = 0; i <= 7; i++) {
			obs.push([i, 10]);
		}

		for (let i = 0; i <= 7; i++) {
			obs.push([i, 15]);
		}

		for (let i = 0; i <= 7; i++) {
			obs.push([i, 20]);
		}

		for (let i = 0; i <= 7; i++) {
			obs.push([i, 25]);
		}
		for (let i = 0; i <= 7; i++) {
			obs.push([i, 30]);
		}
		for (let i = 0; i <= 7; i++) {
			obs.push([i, 35]);
		}
		for (let i = 0; i <= 7; i++) {
			obs.push([i, 40]);
		}
		for (let i = 0; i <= 7; i++) {
			obs.push([i, 45]);
		}

		for (let i = 12; i <= 40; i++) {
			obs.push([i, 45]);
		}

		for (let i = 10; i <= 40; i++) {
			obs.push([i, 41]);
		}

		for (let i = 10; i <= 40; i++) {
			obs.push([i, 37]);
		}
		for (let i = 10; i <= 40; i++) {
			obs.push([i, 33]);
		}

		for (let i = 23; i <= 33; i++) {
			obs.push([10, i]);
		}

		for (let i = 23; i <= 33; i++) {
			obs.push([15, i]);
		}

		for (let i = 23; i <= 33; i++) {
			obs.push([20, i]);
		}

		for (let i = 23; i <= 33; i++) {
			obs.push([26, i]);
		}

		for (let i = 23; i <= 33; i++) {
			obs.push([31, i]);
		}

		// for (let i = 0; i <= 5; i++) {
		// 	obs.push([4, i]);
		// }

		for (let i = 0; i <= 5; i++) {
			obs.push([7, i]);
		}
		for (let i = 0; i <= 5; i++) {
			obs.push([17, i]);
		}

		for (let i = 0; i <= 5; i++) {
			obs.push([26, i]);
		}

		return obs;
	}, []);

	const grid = useMemo(() => createGrid(rows, cols, obstacles), [obstacles]);
	const [path, setPath] = useState([]);
	const [locationvalue, setLocationValue] = useState(null);
	const [destinationvalue, setDestinationValue] = useState(null);

	useEffect(() => {
		const getLocation_Destination = async () => {
			const location = await AsyncStorage.getItem("location");
			const destination = await AsyncStorage.getItem("destination");
			setLocationValue(location);
			setDestinationValue(destination);
		};

		getLocation_Destination();
	}, []);

	const startNode = useMemo(() => {
		switch (locationvalue) {
			case "sci_lab":
				return grid[5][30];
			case "319":
				return grid[3][22];
			case "318":
				return grid[3][10];
			case "317":
				return grid[13][3];
			case "316":
				return grid[18][3];
			case "315":
				return grid[22][3];
			case "314":
				return grid[29][3];
			case "313":
				return grid[37][3];
			case "312":
				return grid[43][3];
			case "scholarship_office":
				return grid[27][17];
			case "ccs_dean":
				return grid[27][23];
			case "ccs_faculty":
				return grid[27][35];
			case "cJe_dean":
				return grid[48][7];
			case "college_lib":
				return grid[48][12];
			case "college_lib_ex":
				return grid[38][13];
			default:
				return grid[3][3];
		}
	}, [locationvalue, grid]);

	const endNode = useMemo(() => {
		switch (destinationvalue) {
			case "sci_lab":
				return grid[5][30];
			case "319":
				return grid[3][22];
			case "318":
				return grid[3][10];
			case "317":
				return grid[13][3];
			case "316":
				return grid[18][3];
			case "315":
				return grid[22][3];
			case "314":
				return grid[29][3];
			case "313":
				return grid[37][3];
			case "312":
				return grid[43][3];
			case "scholarship_office":
				return grid[27][17];
			case "ccs_dean":
				return grid[27][23];
			case "ccs_faculty":
				return grid[27][35];
			case "cJe_dean":
				return grid[48][7];
			case "college_lib":
				return grid[48][12];
			case "college_lib_ex":
				return grid[38][13];
			case "cr_female":
				return grid[27][32];
			case "cr_male":
				return grid[25][35];
			default:
				return null;
		}
	}, [destinationvalue, grid]);

	useEffect(() => {
		if (startNode && endNode) {
			const path = aStar(startNode, endNode, grid);
			setPath(path);
		}
	}, [startNode, endNode, grid]);

	return (
		<View style={styles.container}>
			<Text style={styles.floor_text}>Third Floor</Text>
			<ImageBackground
				style={styles.backgroundImage}
				source={require("../../assets/images/3rd_floor.png")}
			>
				<Svg
					height={rows * cellSize}
					width={cols * cellSize}
					style={styles.svg}
				>
					{/* {grid.map((row, rowIndex) =>
						row.map((cell, colIndex) => (
							<Rect
								key={`cell-${rowIndex}-${colIndex}`}
								x={colIndex * cellSize}
								y={rowIndex * cellSize}
								width={cellSize}
								height={cellSize}
								fill={cell.isWalkable ? "none" : "black"}
								stroke="none"
								
							/>
						))
					)} */}
					{path.map(
						(node, index) =>
							index > 0 && (
								<Line
									key={`line-${index}`}
									x1={path[index - 1].x * cellSize + cellSize / 2}
									y1={path[index - 1].y * cellSize + cellSize / 2}
									x2={node.x * cellSize + cellSize / 2}
									y2={node.y * cellSize + cellSize / 2}
									stroke="blue"
									strokeWidth="3"
								/>
							)
					)}

					{startNode &&
						endNode &&
						startNode.x !== undefined &&
						endNode.x !== undefined &&
						startNode.y !== undefined &&
						endNode.y !== undefined && (
							<>
								<Circle
									cx={startNode.x * cellSize + cellSize / 2}
									cy={startNode.y * cellSize + cellSize / 2}
									r={10}
									fill="skyblue"
									strokeWidth={2}
									stroke="green"
								/>
								<Circle
									cx={endNode.x * cellSize + cellSize / 2}
									cy={endNode.y * cellSize + cellSize / 2}
									r={10}
									fill="skyblue"
									strokeWidth={2}
									stroke="red"
								/>
							</>
						)}
				</Svg>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	floor_text: {
		color: "white",
		position: "absolute",
		fontFamily: "plusrounded_bold",
		fontSize: 24,
		top: 20,
		left: 30,
	},
	backgroundImage: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	svg: {
		position: "absolute",
		top: 160,
		right: 22,
	},
});

export default FloorMap3;
