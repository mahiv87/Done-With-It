import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
	const [firstName, setFirstName] = useState('');

	return (
		<Screen>
			<AppTextInput placeholder="username" icon="email" />
		</Screen>
	);
}
