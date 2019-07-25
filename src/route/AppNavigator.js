import React, { Component } from 'react'

import {
	createSwitchNavigator,
  	createStackNavigator,
  	createAppContainer
} from 'react-navigation'

import AuthLoading from '../screens/AuthLoading'
import Login from '../screens/Login'
import Home from '../screens/Home'
import EditProfile from '../screens/EditProfile'
import ChangePassword from '../screens/ChangePassword'

const AppStack = createStackNavigator({

	Home: Home,
	EditProfile: EditProfile,
	ChangePassword: ChangePassword

},{
	headerMode: 'none'
})


const AuthStack = createStackNavigator({

	Login: Login

}, {
	headerMode: 'none'
})


const swicthNav = createSwitchNavigator({

	AuthLoading: AuthLoading,
	AuthStack: AuthStack,
	AppStack: AppStack
},
{
	initialRouteName: 'AuthLoading'
}
)

export default createAppContainer(swicthNav)