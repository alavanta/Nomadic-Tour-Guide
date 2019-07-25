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
	  		skills: [
	  			{
	  				id: 1,
	  				skill: 'English Language'
	  			},
	  			{
	  				id: 1,
	  				skill: 'Japanese Language'
	  			},
	  			{
	  				id: 1,
	  				skill: 'A Team Region Ciputat, asgf gasgh ashs ahsgh ashgas ashas ashgas ashgas asjhas ashasajahs ash '
	  			},
	  		]
	  	};
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
					<Header navigation={this.props.navigation} title="Edit Profile" />

					<ScrollView style={{flex: 1, paddingHorizontal: 20}}>

						<View style={styles.form}>
							<Text style={styles.titleInput}>
								Full Name
							</Text>
							<TextInput 
								placeholder="Full Name"
								style={styles.textInput} 
							/>
							<Text style={{color: 'red', top: 5, left: 10}}></Text>
						</View>

						<View style={styles.form}>
							<Text style={styles.titleInput}>
								Address
							</Text>
							<TextInput 
								placeholder="Address"
								style={styles.textInput} 
							/>
							<Text style={{color: 'red', top: 5, left: 10}}></Text>
						</View>

						<View style={styles.form}>
							<Picker
							  	selectedValue={this.state.gender}
							  	style={{width: '100%'}}
							  	onValueChange={(itemValue, itemIndex) =>
							    	this.setState({gender: itemValue})
							  	}>
							  	<Picker.Item label="select your gender..." value={0} />
							  	<Picker.Item label="Male" value="L" />
							  	<Picker.Item label="Female" value="P" />
							</Picker>
						</View>

						<Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>
							List Skills
						</Text>

						<FlatList
							data={this.state.skills}
							keyExtractor={(item) => {item.id.toString()}}
							renderItem={({item}) => {
								return(
									<ListSkills item={item} />
								)
							}}
						/>

						<View style={[styles.form, {
							flexDirection: 'row',
							marginTop: 5,
						}]}>
							<View style={{flex: 1}}>
								<TextInput 
									placeholder="Add Skill"
									style={{
										borderBottomWidth: 1,
										paddingVertical: 5,
									}} 
								/>
							</View>
							<Button
								title="Add"
								onPress={() => {
									this.props.navigation.navigate('otpCode')
								}}
							/>
						</View>

						<View style={styles.buttonWrap}>
							<Button
								buttonStyle={styles.loginButton}
								title="Confirm"
								onPress={() => {
									this.props.navigation.navigate('otpCode')
								}}
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