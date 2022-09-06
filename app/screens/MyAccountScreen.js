import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function MyAccountScreen(props) {
	const menuItems = [
		{
			title: 'My Listings',
			icon: {
				name: 'format-list-bulleted',
				backgroundColor: colors.primary
			}
		},
		{
			title: 'My Messages',
			icon: {
				name: 'email',
				backgroundColor: colors.secondary
			}
		}
	];

	return (
		<Screen style={styles.screen}>
			<View>
				<ListItem
					title={'Marcus Herrera'}
					subTitle={'marcus.herrera@du.edu'}
					image={require('../assets/me.png')}
				/>
			</View>
			<View>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => {
						<ListItem title={item.title} IconComonenent />;
					}}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light
	}
});

export default MyAccountScreen;
