import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './src/home/index.js'
import DetailsScreen from './src/details/index.js'
import ProfileScreen from './src/profile/index.js'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Details: {
		screen: DetailsScreen
	}
}, {
	initialRouteName: 'Home'
})

const ProfileNavigator = createStackNavigator({
	Profile: {
		screen: ProfileScreen
	}
}, {
	initialRouteName: 'Profile'
})

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state
	const iconNames = {
		Home: 'md-home',
		Profile: 'md-person'
	}
	return <Icon name={iconNames[routeName]} size={25} color={tintColor} />
}

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeNavigator,
		Profile: ProfileNavigator
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) =>
				getTabBarIcon(navigation, focused, tintColor)
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		}
	}
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
	render () {
		return <AppContainer />
	}
}
