import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native'

import { withNavigation } from 'react-navigation'

class Main extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Text>
					Main
				</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default withNavigation(Main)

