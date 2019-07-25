import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, TextInput } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Avatar, ListItem, Button } from 'react-native-elements';

import Header from '../../components/HeaderProfile'

//=============== Icons ================//

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { withNavigation } from 'react-navigation'

class Profile extends Component {



	handleEditProfile = () => {
		this.props.navigation.navigate('EditProfile')
	}

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Header />
                <View style={styles.background}>
                    <LinearGradient colors={['#F4A386','#EF4453']} style={styles.redBackground}>

                    </LinearGradient>
                    <View style={styles.whiteBackground}>

                    </View>
                </View>

                <View style={styles.profileContainer}>
                	<View style={{
                		padding: 10,
                		backgroundColor: 'rgba(255,255,255,0.3)',
                		borderRadius: 100,
                		top: 50
                	}}>
                		<View style={{
	                		padding: 10,
	                		backgroundColor: 'rgba(255,255,255,0.5)',
	                		borderRadius: 100

	                	}}>
                			<Avatar
							  	size={100}
							  	rounded
							  	title="D"
							  	source={{uri: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/video_thumbnail_hd_large/public/video-thumbnails/spiderman-into-the-spiderverse-site.jpg?itok=woEz0M0y'}}
							/>
                		</View>
                	</View>
                	<Text numberOfLines={1} style={styles.name}>
                		Dwi Nugroho
                	</Text>
                </View>

                <ScrollView style={{
                	paddingHorizontal: 20
                }}>

                	<Text  style={styles.biodataText}>
						Biodata
					</Text>

					<View style={styles.textContainer}>
						<Fontisto
                          	name="date"
                          	size={18}
                        />
                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        	19 Years Old
                        </Text>
					</View>

					<View style={styles.textContainer}>
						<MaterialCommunityIcons
                          	name="gender-male-female"
                          	size={18}
                        />
                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        	Male
                        </Text>
					</View>

					<View style={styles.textContainer}>
						<MaterialCommunityIcons
                          	name="email"
                          	size={18}
                        />
                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        	adwinugroho1@gmail.com
                        </Text>
					</View>

					<View style={styles.textContainer}>
						<Entypo
                          	name="phone"
                          	size={18}
                        />
                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        	085336685269
                        </Text>
					</View>

					<View style={styles.textContainer}>
						<Entypo
                          	name="location-pin"
                          	size={18}
                        />
                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        	Jl. xxx No. 18 Yogyakarta
                        </Text>
					</View>

					<View style={styles.textContainer}>
						<AntDesign
                          	name="database"
                          	size={18}
                        />
                       	<View>

                       		<Text style={{marginLeft: 10, fontWeight:'bold'}}>
                        		Skills
                        	</Text>

                        	<View style={{flexDirection: 'row', marginLeft: 5}}>
	                        	<AntDesign
		                          	name="minus"
		                          	size={18}
		                        />
		                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
		                        	English Language
		                        </Text>
	                        </View>

	                        <View style={{flexDirection: 'row', marginLeft: 5}}>
	                        	<AntDesign
		                          	name="minus"
		                          	size={18}
		                        />
		                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
		                        	English Language
		                        </Text>
	                        </View>

	                        <View style={{flexDirection: 'row', marginLeft: 5}}>
	                        	<AntDesign
		                          	name="minus"
		                          	size={18}
		                        />
		                        <Text style={{marginLeft: 10, fontWeight:'bold'}}>
		                        	English Language
		                        </Text>
	                        </View>
                       	</View>

					</View>


					<View style={styles.buttonWrap}>
						<Button
							buttonStyle={[styles.buttonBottom, {
								backgroundColor: '#FF4453'
							}]}
							title="Edit Profile"
							onPress={this.handleEditProfile}
						/>
						<Button
							buttonStyle={styles.buttonBottom}
							title="Change Password"
						/>
					</View>

					<View style={{height: 20}} />
				    
                </ScrollView>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -999,
        flexDirection: 'column'
    },
    redBackground: {
        height: 200,
        borderBottomLeftRadius: 100, 
        borderBottomRightRadius: 0, 
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileContainer: {
    	height: 200,
    	flexDirection: 'row',
    	alignItems: 'flex-end',
    	marginHorizontal: 10
    },
    name: {
    	fontSize: 30,
    	color: 'white',
    	marginHorizontal: 20,
    	marginBottom: 10,
    	fontWeight: 'bold'
    },
    biodataText: {
		backgroundColor: '#FF4453',
		alignSelf: 'flex-end',
		paddingHorizontal: 25,
		paddingVertical: 5,
		borderRadius: 50,
		borderBottomRightRadius: 0,
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
		left: 2,
		marginVertical: 20
	},
	textContainer: {
		flexDirection: 'row',
		backgroundColor: 'rgba(255, 145, 153, 0.3)',
		padding: 10,
		borderRadius: 5,
		marginBottom: 5
	},
	buttonWrap: {
		width: '100%',
		marginTop: 20
	},
	buttonBottom: {
		borderBottomRightRadius: 5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		paddingVertical: 7,
		marginBottom: 20,
	},
	buttonWrap: {
		width: '100%',
		marginTop: 20
	},
	loginButton: {
		backgroundColor: '#FF4453',
		borderBottomRightRadius: 5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		paddingVertical: 7
	}
})

export default withNavigation(Profile);
