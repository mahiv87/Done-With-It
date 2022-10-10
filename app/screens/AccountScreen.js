import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { ListItem, ListItemSeparator } from '../components/lists';
import Icon from '../components/Icon';

function AccountScreen(props) {
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
			<View style={styles.container}>
				<ListItem title={'Marcus Herrera'} subTitle={'marcus.herrera@du.edu'} image={require('../assets/me.png')} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem title={'Log Out'} IconComponent={<Icon name={'logout'} backgroundColor="#ffe66d" />} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20
	},
	screen: {
		backgroundColor: colors.light
	}
});

export default AccountScreen;
