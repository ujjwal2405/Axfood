import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {searchdata} from '../Services/Search/action';
import {colors} from '../Config/constants'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
      product: '',
    };
  }

  render() {
    const {route, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.HeadContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Image
              source={require('../Assets/ChevronLeft.png')}
              style={styles.Chevron}
            />
          </TouchableOpacity>

          <Text style={styles.ProductDetails}>Product Details</Text>
        </View>

        <View style={styles.ProdNameContainer}>
          <Text style={styles.ProductName}>{route.params.name}</Text>
          <Text style={styles.BarcodeId}>{route.params.barcodeId}</Text>
        </View>

        <View style={styles.LSD}>
          <Text style={styles.LsdText}>Last Scanned Details</Text>
        </View>

        <View style={styles.ProductQuantityView}>
          <View style={styles.QuantityView}>
            <Text>Quantity</Text>
            <Text>
              {route.params.quantity == null ? 0 : route.params.quantity}Kg
            </Text>
          </View>

          <View style={styles.GreyLine} />

          <View style={styles.PriceView}>
            <Text>Price</Text>
            <Text>${route.params.price == null ? 0 : route.params.price}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacing: {
    margin: 20,
  },
  TextInput: {
    height: 40,
    width: 300,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: colors.white,
  },
  ProductView: {
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    padding: 10,
  },
  HeadContainer: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 5,
  },
  Chevron: {
    marginTop: 8,
    marginLeft: 10,
  },
  ProductDetails: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ProdNameContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  ProductName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BarcodeId: {
    marginTop: 10,
    color: colors.silver,
  },
  LSD: {
    marginLeft: 20,
    marginTop: 30,
  },
  LsdText: {
    color: colors.silver,
  },

  ProductQuantityView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    backgroundColor: colors.bgproduct,
    padding: 30,
    opacity: 0.5,
  },
  QuantityView: {flexDirection: 'row', justifyContent: 'space-between'},
  GreyLine: {height: 1, backgroundColor: colors.grey, marginTop: 10},
  PriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  datas: state.searchDisplayReducer.sdata,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  searchdatalist: searchdata,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

// product name,barcode,quantity,price
