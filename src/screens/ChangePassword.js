import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TextInput,
	FlatList,
	Picker
} from 'react-native'

import {
	Button
} from 'react-native-elements'

import Header from '../components/HeaderBack'
import ListSkills from '../components/ListSkills'

class EditProfile extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		oldPassword: '',
	  		newPassword: '',
	  		confirmPassword: '',
	  		oldPasswordValidate: '',
	  		newPasswordValidate: '',
	  		confirmPasswordValidate: ''
	  	};
	}

	oldPasswordChange = async (value) => {

		await this.setState({

			oldPassword: value
		})

	}

	newPasswordChange = async (value) => {

		await this.setState({
			
			newPassword: value
		})

		if ( this.state.newPassword.length < 6 ) {

			this.setState({

				newPasswordValidate: 'New password must be at least 6 characters'
			})

		} else {

			this.setState({

				newPasswordValidate: false
			})
		}

	}

	confirmPasswordChange = async (value) => {

		await this.setState({
			
			confirmPassword: value
		})

		if ( this.state.confirmPassword !== this.state.newPassword ) {

			this.setState({

				confirmPasswordValidate: 'Password dont match!'
			})

		} else {

			this.setState({
				
				confirmPasswordValidate: false
			})
		}


	}

	render () {
		return (
			<View style={styles.bodyParent}>
				<View style={styles.background}>
					<Image
						style={styles.backgroundImage}
						source={require('../assets/undraw_post_online_dkuk.png')}
					/>
				</View>

				<View style={styles.bodyContainer}>
					<Header navigation={this.props.navigation} title="Change Password" />

					<ScrollView style={{flex: 1, paddingHorizontal: 20}}>

						<View style={styles.form}>
							<Text style={styles.titleInput}>
								Old Password
							</Text>
							<TextInput 
								placeholder="Old Password"
								style={styles.textInput}
								secureTextEntry={true}
								value={this.state.oldPassword}
								onChangeText={this.oldPasswordChange}
							/>
							<Text style={{color: 'red', top: 5, left: 10}}>
								{this.state.oldPasswordValidate}
							</Text>
						</View>

						<View style={styles.form}>
							<Text style={styles.titleInput}>
								New Password
							</Text>
							<TextInput 
								placeholder="New Password"
								style={styles.textInput}
								secureTextEntry={true}
								value={this.state.newPassword}
								onChangeText={this.newPasswordChange}
							/>
							<Text style={{color: 'red', top: 5, left: 10}}>
								{this.state.newPasswordValidate}
							</Text>
						</View>
						<View style={styles.form}>
							<Text style={styles.titleInput}>
								Confirm Password
							</Text>
							<TextInput 
								placeholder="Confirm Password"
								style={styles.textInput}
								secureTextEntry={true}
								value={this.state.confirmPassword}
								onChangeText={this.confirmPasswordChange}
							/>
							<Text style={{color: 'red', top: 5, left: 10}}>
								{this.state.confirmPasswordValidate}
							</Text>
						</View>

						

						<View style={styles.buttonWrap}>
							<Button
								disabled={
									this.state.newPasswordValidate !== false ? true
									: this.state.confirmPasswordValidate !== false ? true
									: false
								}
								buttonStyle={styles.loginButton}
								title="Confirm"
							/>
						</View>

						<View style={{height: 50}} />

					</ScrollView>
				</View>
			</View>
		)
	}
}

export default EditProfile

const styles = StyleSheet.create({
	bodyParent: {
		flex: 1,
	},
	background: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	backgroundImage: {
		width: '130%',
		resizeMode: 'contain',
		transform: [{ rotate: '5deg' }],
		left: -50,
		top: -100,
		zIndex: -999,
	},
	bodyContainer: {
		flex: 1,
		backgroundColor: 'rgba(255,255,255,0.9)'
	},
	form: {
		width: '100%',
		marginTop: 10
	},
	titleInput: {
		fontSize: 15,
		marginLeft: 10,
		marginBottom: 10
	},
	textInput: {
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 5,
		backgroundColor: '#f5f5f5',
		borderWidth: 1,
		borderColor: '#a8a8a8'
	},
	buttonWrap: {
		width: '100%',
		marginTop: 30
	},
	loginButton: {
		backgroundColor: '#FF4453',
		borderBottomRightRadius: 5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		paddingVertical: 7
	}
})