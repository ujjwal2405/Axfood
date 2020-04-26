import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {searchdata} from '../Services/Search/action';
import { colors } from '../Config/constants';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
      product: '',
    };
  }

  render() {
    const {datas, navigation} = this.props;
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Datalist');
            }}>
            <Image
              source={require('../Assets/ChevronLeft.png')}
              style={styles.Chevron}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.TextInput}
            autoCapitalize="none"
            onChangeText={find => {
              if (find && find.length > 2) {
                this.props.searchdatalist(this.props.header, find);
              }
            }}
            placeholder="Search.."
          />
        </View>

        <View style={styles.GreyLine} />

        <FlatList
          data={datas}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Product', {
                    name: item.productName,
                    barcodeId: item.barcodeId,
                    quantity: item.volume,
                    price: item.price,
                  });
                }}>
                <View style={styles.ProductView}>
                  <Text style={styles.spacing}>{item.productName}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    borderBottomColor: colors.silver,
    padding: 10,
  },
  Chevron: {
    marginTop: 26,
    marginLeft: 20,
  },
  GreyLine: {
    marginTop: 5,
    backgroundColor: colors.silver,
    height: 3,
    opacity: 0.3,
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
)(Search);
