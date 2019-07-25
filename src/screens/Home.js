import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar, AsyncStorage } from 'react-native';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';

//======= React Native Tab View =======//

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

//============= Tab Menu =============//

import Main from './tabmenu/Main';
import Booking from './tabmenu/Booking';
import Profile from './tabmenu/Profile';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        {
          key: 'first',
          title: 'Main',
          icon: 'home'
        },
        {
          key: 'second',
          title: 'Profile',
          icon: 'user'
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.bodyParent}>
        <TabView
          tabBarPosition="bottom"
          navigationState={this.state}
          renderScene={SceneMap({
            first: Booking,
            second: Profile,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#EF4453' }}
              style={{ backgroundColor: 'white', height: 50 }}
              labelStyle={{ color: 'black', fontSize: 0 }}
              renderIcon={({ route, focused, color }) => (
                <AntDesign
                  name={route.icon}
                  color={focused ? '#EF4453' : 'grey'}
                  size={20}
                />
              )}
            />
          )}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  bodyParent: {
    flex: 1
  }
});
