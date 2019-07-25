import React, { Component } from 'react'

import {
	View,
	Text,
	ActivityIndicator,
	StatusBar,
	AsyncStorage
} from 'react-native'

class AuthLoading extends Component {

	constructor(props) {
	  	super(props);

	  	this.checkLogin()
	}

	checkLogin = async () => {
		await AsyncStorage.getItem('token', (error, result) => {
			if (result) {
				this.props.navigation.navigate('AppStack')
			} else {
				this.props.navigation.navigate('AppStack')
			}
		})
	}


	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: '#FF4453',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<ActivityIndicator size="large" color="white" />
			</View>
		)
	}
}

export default AuthLoading