import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
	return (
		<View style={styles.background}>
			<View style={styles.buttonContainer}>
				<View style={styles.closeButton}></View>
				<View style={styles.deleteButton}></View>
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
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: 'absolute',
		top: 40,
		left: 30
	},
	deleteButton: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
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
