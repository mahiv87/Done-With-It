import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from './AppText/AppText';
import colors from '../config/colors';

function Card({ title, subtitle, image }) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subtitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden'
	},
	detailsContainer: {
		padding: 20
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		marginBottom: 7
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold'
	}
});

export default Card;
