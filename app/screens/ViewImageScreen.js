import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
	return (
		<View style={styles.background}>
			<View style={styles.buttonContainer}>
				<View style={styles.closeButton}>
					<MaterialCommunityIcons name="close" color="white" size={30} />
				</View>
				<View style={styles.deleteButton}>
					<MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
				</View>
			</View>
			<Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')} />
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: colors.black
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	closeButton: {
		position: 'absolute',
		top: 40,
		left: 30
	},
	deleteButton: {
		position: 'absolute',
		top: 40,
		right: 30
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default ViewImageScreen;
