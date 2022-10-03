import { StyleSheet, Platform } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
	colors,
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
	}
});

export default styles;
