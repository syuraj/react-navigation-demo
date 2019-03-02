import React from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
	render () {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ marginBottom: 10 }} >Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate('Details')}
				/>
			</View>
		)
	}
}
