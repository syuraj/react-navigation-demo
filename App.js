import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './src/home/index.js'
import DetailsScreen from './src/details/index.js'
import ProfileScreen from './src/profile/index.js'

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

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeNavigator,
		Profile: ProfileNavigator
	}
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
	render () {
		return <AppContainer />
	}
}
