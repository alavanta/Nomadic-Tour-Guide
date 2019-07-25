import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

//=============== Icons ================//

import AntDesign from 'react-native-vector-icons/dist/AntDesign';

//======== React Native Elements ========//

import {
    Button
} from 'react-native-elements'


class Header extends Component {
    render() {
        return (
            <View style={styles.parentHeader}>

                <Button 
                    buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                    icon={
                        <AntDesign
                          name="left"
                          size={18}
                          color="black"
                        />
                    }
                />

                <View style={styles.textWrap}>
                    <Text style={styles.headerText}>{this.props.title}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentHeader: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 20
    },
    textWrap: {
        flex: 1,
        alignItems: 'flex-end'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }
})

export default Header;
