import React, { Component } from 'react'

import {
	createSwitchNavigator,
  	createStackNavigator,
  	createAppContainer
} from 'react-navigation'

import AuthLoading from '../screens/AuthLoading'
import Login from '../screens/Login'
import Home from '../screens/Home'

const AppStack = createStackNavigator({

	Home: Home

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
	AppStack: AppStack,
	AuthStack: AuthStack
},
{
	initialRouteName: 'AuthLoading'
}
)

export default createAppContainer(swicthNav)