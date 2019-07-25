import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	YellowBox
} from 'react-native'
import store from './src/public/redux/store';
import { Provider } from 'react-redux';

import AppNavigation from './src/route/AppNavigator'

YellowBox.ignoreWarnings(['ViewPagerAndroid']);
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}> 
					<StatusBar
						translucent
						barStyle="dark-content"
						backgroundColor="rgba(0, 0, 0, 0.0)"
					/>
					<AppNavigation />
				</View>
			</Provider>

		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})