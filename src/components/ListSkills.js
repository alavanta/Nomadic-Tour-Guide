import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import {
	Button
} from 'react-native-elements'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';

class ListSkills extends Component {
	render () {
		return (
			<View style={styles.bodyParent}>
				<View style={{flex: 1,}}>
					<Text>
						{this.props.item.skill}
					</Text>
				</View>
				<View style={{marginLeft: 5,}}>
					<Button 
	                    buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
	                    icon={
	                        <AntDesign
	                          name="delete"
	                          size={15}
	                          color="black"
	                        />
	                    }
	                />
				</View>
			</View>
		)
	}
}

export default ListSkills

const styles = StyleSheet.create({
	bodyParent: {
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#F4CB86',
		padding: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		marginVertical: 4,
		justifyContent: 'space-between'
	}
})