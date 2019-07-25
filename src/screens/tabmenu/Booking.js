import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { fetchBooking } from '../../public/redux/actions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const booking = [
  {
    id: 1,
    package_name: 'Historical Yogyakarta',
    package_description:
      'blakbkawakoskawoadkwokdaowdkaowdkwadk;awdoanawodaowdawd',
    package_price: '500.000',
    package_image:
      'https://tvlk-prod-asset.imgix.net/v2/generic/C8Kj5%2FdCnE75BMxGpYYdcJVuEQbV3CnmF8ONfpQKM2nSWWBIIZYawS1qMa7rEFnfG98IwM2AYg%2FzV3Cdmk5cW7NoHZSrbXwV4s0WBflrHqTBsSD9oX0LJZTowu7uPKl8zFtG2S2P62fSyugNx88FtcjEkmQu7w8%2Bcc2p4QzYVjyhsEnvBBs8TTKtaRjMmG29Oxzj8dtgg%2Fj1VJVoVmtEeHcPWBy2ZMkNRgQoUfg1HdXyhH6i%2FJFMWqUfzmWK8rwSruVmrN4sn1bSK0uqOF2hi41%2FMu3LjC2zNGWASFFkeYxiGg5Y9Tp5gXAPt%2FTA7A9JXBdVaTRNbB4l0w1TOoWSJAEQl%2BOwdknAP%2F0zYIwBwBjZ2qdgeDySPa%2BBRQ1xPvrAdUmUc4KDV1LMLB5fPQFy6g%3D%3D?auto=compress%2Cformat&cs=srgb&ixlib=java-1.1.12&q=75&tv-dynamic=true',
    date_start: '07 Aug 2019'
  },
  {
    id: 2,
    package_name: 'Yogyakarta Simple Vacation Plan',
    package_description:
      'blakbkawakoskawoadkwokdaowdkaowdkwadk;awdoanawodaowdawd',
    package_price: '300.000',
    package_image:
      'https://trinurastuti.files.wordpress.com/2017/01/salah-satu-kegiatan-menarik-di-pantai-parangtritis-600x405.jpg?w=600',
    date_start: '07 Oct 2019'
  }
];

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // bookingData: booking,
    };
    console.log(this.props)
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        // console.log(result)
        this.props.dispatch(fetchBooking(result));
      }
    });
  }

  BookedList = ({ item, index }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity style={{width:'100%'}}  onPress={()=> this.props.navigation.navigate('PackageDetail',item)}>
      <Card
        image={{ uri: item.package_image }}
        containerStyle={{ width: '90%' }}
        title={item.package_name}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text>{item.date_start}</Text>
          <Text style={{ fontWeight: 'bold' }}>Rp. {item.package_price}</Text>
        </View>
      </Card>
      </TouchableOpacity>
    </View>
  );

  render() {
    // console.log(this.props.)
    if (this.props.booking.isLoading) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator size="large" color="#FF4453" />
        </View>
      );
    } else {
      console.log(this.props.booking.isError, 'DARI BOOKING');
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: '100%',
              height: '10%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              // alignItems: 'center'
            }}
          >
            <View>
              <Text
              style={{fontSize: 20,margin:25, fontWeight: 'bold',}}
              >My Bookings</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
           { this.props.booking.isError == true ? (
              <View>
                <Image
                  source={require('../../assets/list.png')}
                  style={{
                    alignSelf: 'center',
                    width: 80,
                    height: 80,
                    marginBottom: 15
                  }}
                />
                <Text style={{ fontSize: 17, alignSelf: 'center' }}>
                  There is no order to show
                </Text>
                {/* <Button
                  containerStyle={{ alignSelf: 'center' }}
                  buttonStyle={{
                    backgroundColor: '#EF4453',
                    width: 120,
                    marginTop: 10
                  }}
                  title="Explore Now"
                /> */}
              </View>
            ) : (
              <View style={{ flex: 1,marginBottom:10 }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                  keyExtractor={item => {
                    item.id.toString();
                  }}
                  data={this.props.booking.booking}
                  // data={booking}
                  renderItem={this.BookedList}
                />
              </View>
            )}
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    booking: state.booking
  };
};

export default connect(mapStateToProps)(withNavigation(Booking));
// export default withNavigation(Booking);
