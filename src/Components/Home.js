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
    if (loading === true && success===true) {
      return (
        <View style={styles.Activity}>
          <ActivityIndicator />
        </View>
      );
    } else if (success === true) {
      navigation.navigate('Concept');
    } else if (failure === true) {
      return Alert.alert('wrong credentials');
    }
  };

  render() {
    const {navigation, loading, failure, success} = this.props;
    return (
        
        <ImageBackground
        source={require('../Assets/veggiesBottom.png')}
        style={{flex:1,resizeMode:'cover'}}
        >
        

        <Image
          style={{marginLeft: 35, marginTop: 160}}
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
        <Text>
            Forgot Password
        </Text>
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
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginView: {
    backgroundColor: 'rgb(235, 90, 14)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 50,
    width: '80%',
    marginLeft: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopEndRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  LoginText: {color: 'white', fontWeight: 'normal'},
  signup:{color:'rgb(235, 90, 14)',fontWeight:'bold'},
  AssetContainer:{justifyContent:"center",alignItems:'center',marginTop:30}
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
