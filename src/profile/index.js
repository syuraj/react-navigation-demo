import React from 'react'
import { View, Text, Button } from 'react-native'

export default class ProfileScreen extends React.Component {
	render () {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ marginBottom: 10 }} >Profile Screen</Text>
			</View>
		)
	}
}
