import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, AsyncStorage, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

//=============== Icons ================//

import Ionicons from 'react-native-vector-icons/dist/Ionicons';

//======== React Native Elements ========//

import {
    Button
} from 'react-native-elements'


class Header extends Component {

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <View style={styles.parentHeader}>
                <View style={styles.textWrap}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <Button 
                    onPress={() => {
                        Alert.alert(
                            "Logout",
                            "Are you sure want to leave?",
                            [
                                {
                                    text: "NO", onPress: () => {
                                        
                                    }
                                },
                                {
                                    text: "YES", onPress: () => {
                                        
                                        this.logout()
                                    }
                                }
                            ],
                            { cancelable: false }
                        )
                    }}
                    buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
                    icon={
                        <Ionicons
                          name="md-exit"
                          size={25}
                          color="black"
                        />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentHeader: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
    },
    textWrap: {
        flex: 1,
        alignItems: 'flex-start'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    }
})

export default Header;
