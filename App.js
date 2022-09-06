import { Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

export default function App() {
	return (
		<Screen>
			<Icon name="email" />
		</Screen>
	);
}
