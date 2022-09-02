import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import colors from '../config/colors';

function WelcomeScreen(props) {
	return (
		<ImageBackground style={styles.background} blurRadius={8} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Button title="LOGIN" />
				<Button title="REGISTER" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	buttonsContainer: {
		width: '100%',
		padding: 20
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.primary
	},
	logo: {
		width: 100,
		height: 100
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: colors.secondary
	},
	tagline: {
		fontSize: 25,
		fontWeight: 'bold',
		marginVertical: 20
	}
});

export default WelcomeScreen;
