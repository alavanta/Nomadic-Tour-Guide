import React, { Component } from 'react';
import {
	Animated,
	Image,
	ScrollView,
	Dimensions,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	ActivityIndicator
} from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { fetchPackageById } from '../public/redux/actions';
import { connect } from 'react-redux';

const destination_dummmy = [
	{
		id:1,
		destination_image:'https://cdn2.tstatic.net/makassar/foto/bank/images/misteri-jam-raksasa-di-candi-borobudur-mengungkap-matahari-yang-tak-selalu-terbit-di-timur.jpg',
		destination_name:'Candi Borobudur',
		latitude:-7.60765000,
		longitude:110.20377300
	},
	{
		id:2,
		destination_image:'https://cdn-image.hipwee.com/wp-content/uploads/2018/08/hipwee-jalan-malioboro-750x422.jpg',
		destination_name:'Malioboro',
		latitude:-7.60765000,
		longitude:110.20377300
	}
]

class PackageDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollY: new Animated.Value(0),
			isLoading: true
		};
	}
	
// 	bookingHandler = () => {
//     this.props.navigation.navigate('Checkout', {
//       selectedItem: this.props.packages.package,
//       userToken: this.state.userToken,
//     });
//   };

	gotoMap = () => {
		// console.log(this.props.packages.package)
		this.props.navigation.navigate('Maps',{destinations:this.props.packages.package});
	};

	priceFormating = (price) => {
		let totalPrice = price;
        let number_string = totalPrice.toString(),
            remains = number_string.length % 3,
            idr = number_string.substr(0, remains),
            Thousands = number_string.substr(remains).match(/\d{3}/g);

        if (Thousands) {
            separator = remains ? '.' : '';
            idr += separator + Thousands.join('.');
		}
        return idr;
	}
	
	_keyExtractor = (item, index) => item.id;

	_renderItem = ({ item }) => (
		<View style={styles.destinations} key={item.id}>
			<TouchableOpacity style={styles.destination}>
				<Image
					style={{ height: width / 4, width: width / 4 }}
					source={{ uri: item.destination_image }}
				/>
				<Text style={{fontSize:10, margin:3}} numberOfLines={1}>{item.destination_name}</Text>
			</TouchableOpacity>
		</View>
	);

	componentWillMount() {
		let packageId = this.props.navigation.state.params.id;
		// console.warn(packageId)
		AsyncStorage.getItem('token', (error, result) => {
			if (result) {
				console.warn(packageId)
				this.props.dispatch(fetchPackageById(result, packageId)).then(data => {
					this.setState({ isLoading: false });
				});
			}
		});
		
	}

	render() {
		const headerHeight = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
			extrapolate: 'clamp'
		});
		const imageOpacity = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
			outputRange: [1, 1, 0.9],
			extrapolate: 'clamp'
		});
		const imageTranslate = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, -(width * 0.3)],
			extrapolate: 'clamp'
		});

		if (this.state.isLoading) {
			return (
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator style={{ marginTop: height / 2 }} size="large" color="red" animating={true} />
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<ScrollView
						style={styles.fill}
						scrollEventThrottle={16}
						onScroll={Animated.event([
							{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }
						])}
					>
						<View style={styles.priceTag}>
							<Text style={styles.subTitle}>{this.props.navigation.state.params.package_name}</Text>
							<Text style={styles.caption}>Rp{this.priceFormating(this.props.navigation.state.params.package_price)}</Text>
						</View>
						<View style={styles.description}>
							<Text style={styles.subTitle}>Description</Text>
							<Text style={styles.caption}>
								{this.props.navigation.state.params.package_description}
							</Text>
						</View>

						<View style={styles.description}>
							<Text style={styles.subTitle}>Destinations</Text>
							<FlatList
								// data={this.props.packages.package.destinations}
								data={destination_dummmy}
								keyExtractor={this._keyExtractor}
								renderItem={this._renderItem}
								horizontal={true}
								style={styles.flatlist}
								showsHorizontalScrollIndicator={false}
							/>
						</View>
						<View style={styles.description}>
							<Text style={styles.subTitle}>Included</Text>
							<Text style={styles.caption}>
							{this.props.navigation.state.params.included_fasilities}
							</Text>
						</View>
						<View style={styles.description}>
							<Text style={styles.subTitle}>Not included</Text>
							<Text style={styles.caption}>
								{this.props.navigation.state.params.nonincluded_fasilities}
								
							</Text>
						</View>
					</ScrollView>
					<View style={styles.footer}>
						<View style={styles.detailFooter}>
							<Text numberOfLines={1} style={{ color: '#000', fontSize: 16 }}>
								Rp{this.priceFormating(this.props.navigation.state.params.package_price)}
							</Text>
							<Text numberOfLines={1} style={{ color: '#444', fontSize: 10 }}>
								{this.props.navigation.state.params.package_name}
							</Text>
						</View>
						<TouchableOpacity
							// onPress={() => this.bookingHandler()}
							style={styles.button}
						>
							<Text style={{ color: '#FFF', fontWeight: '500', fontSize: 16 }}>
								Chat
              				</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => this.gotoMap()} style={styles.mapFab}>
						<Icon
							name='map'
							type='Entypo'
							color='#FFF'
							size={25} />
					</TouchableOpacity>
					<Animated.View style={[styles.header, { height: headerHeight }]}>
						<Animated.Image
							style={[
								styles.backgroundImage,
								{
									opacity: imageOpacity,
									transform: [{ translateY: imageTranslate }]
								}
							]}
							source={{
								uri: this.props.navigation.state.params.package_image
							}}
						/>
						<Animated.View>
							<View style={styles.bar}>
								<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
									<Icon
										name="arrowleft"
										type="antdesign"
										color="#FFF"
										size={25}
									/>
								</TouchableOpacity>
								<View style={styles.headerContent}>
									<Text numberOfLines={1} style={styles.name}>
										{this.props.navigation.state.params.package_name}
									</Text>
								</View>
							</View>
						</Animated.View>
					</Animated.View>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		packages: state.packages
	};
};
export default connect(mapStateToProps)(withNavigation(PackageDetail));

const { height, width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = width;
const HEADER_MIN_HEIGHT = width * 0.4;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	fill: {
		flex: 1,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: '#EF4453',
		overflow: 'hidden',
		elevation: 4
	},
	headerContent: {
		flex: 1,
		alignSelf: 'flex-end',
		justifyContent: 'flex-end'
	},
	bar: {
		height: '100%',
		alignItems: 'flex-start',
		flexDirection: 'column',
		padding: 20
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: null,
		height: HEADER_MAX_HEIGHT,
		resizeMode: 'cover',
	},
	name: {
		color: '#FFF',
		fontSize: 18,
		marginRight: 10,
		marginLeft: 50,
	},
	priceTag: {
		marginTop: HEADER_MAX_HEIGHT + 20,
		backgroundColor: '#FFF',
		padding: 10
	},
	description: {
		backgroundColor: '#FFF',
		marginTop: 20,
		padding: 10
	},
	subTitle: {
		fontWeight: '500',
		fontSize: 16
	},
	caption: {
		fontSize: 12,
	},
	footer: {
		backgroundColor: '#FFF',
		height: 50,
		elevation: 6,
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 10,
		flexDirection: 'row'
	},
	button: {
		backgroundColor: '#EF4453',
		padding: 10,
		width: width * 0.5,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		elevation: 5
	},
	detailFooter: {
		flex: 1
	},
	mapButton: {
		margin: 10
	},
	mapFab: {
		bottom: 60,
		right: 20,
		width: width / 7,
		height: width / 7,
		alignItems: 'center',
		borderRadius: (width / 7) / 2,
		justifyContent: 'center',
		backgroundColor: '#EF4453',
		position: 'absolute',
		elevation: 4
	},
	flatlist: {
		marginTop: 20
	},
	destinations: {
		elevation: 4
	},
	destination: {
		backgroundColor: '#FFF',
		elevation: 4,
		margin: 6,
		width: width / 4

	}
});