import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag} from '../Services/Home/action';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../Config/constants'
import AsyncStorage from '@react-native-community/async-storage';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      flag: false,
    };
}
  onLogin = () => {
    const {navigation, loading, failure, success} = this.props;
    if (loading === true && success === false) {
      return (
        <View style={styles.Activity}>
          <ActivityIndicator />
        </View>
      );
    } else if (success === true) {
      navigation.navigate('Concept');
    } 
  };



  render() {
    return (
      <ImageBackground
        source={require('../Assets/veggiesBottom.png')}
        style={styles.ImageBg}>
        <Image
          style={styles.Logo}
          source={require('../Assets/axfoodLogo.png')}
        />

        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          onChangeText={txt => this.setState({username: txt})}
          placeholder="Enter User Id"
        />

        {/* <Text>Password:</Text> */}
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          onChangeText={txt => this.setState({password: txt})}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => {
            this.setState({
              flag: true,
            });
            this.onLogin();
          }}>
          <View style={styles.LoginView}>
            <Text style={styles.LoginText}> LOGIN</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.AssetContainer}>
          <Text>Forgot Password</Text>
        </View>

        <View style={styles.AssetContainer}>
          <Text>
            New User? <Text style={styles.signup}>Sign Up</Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (state.flag == true) {
      state.flag = false;
      props.toggleHomeFlag(state.username, state.password, props.header);
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInput: {
    height: 40,
    width: 300,
    marginTop: 40,
    marginLeft: 40,
    borderBottomColor: colors.silver,
    borderBottomWidth: 0.5,
    width: '80%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginView: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 50,
    width: '82%',
    marginLeft: 38,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopEndRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  LoginText: {
    color: colors.white,
    fontWeight: 'normal',
  },
  signup: {
    color: colors.orange,
    fontWeight: 'bold',
  },
  AssetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  ImageBg: {
    flex: 1,
    resizeMode: 'cover',
  },
  Logo: {
    marginLeft: 35,
    marginTop: 160,
  },
});

const mapStateToProps = state => ({
  flag: state.homeReducer.homeFlag,
  success: state.homeReducer.loginSuccess,
  failure: state.homeReducer.loginFailure,
  loading: state.homeReducer.loading,
  header: state.homeReducer.header,
});
const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/bon?

// (20/Apr/2020)

// https://admin-rel.priskoll.occdev.axfood.se/axfood/axfood-product-scan/concepts?

// (21 apr 2020)
