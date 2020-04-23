import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {getdata} from '../Services/Data/action';

class Datalist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.datalist(this.props.header);
  }

  render() {
    const {datas,navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.SelectStoreView}>
          <Text style={styles.SelectStore}>Select Store</Text>
          
          <TouchableOpacity
          onPress={()=>{
              navigation.navigate('Search')
          }}>
          <Image
            source={require('../Assets/search.png')}
            style={styles.Search}
          />
          </TouchableOpacity>
        </View>

        <FlatList
          data={datas}
          renderItem={({item}) => {
            return (
              <View style={styles.FlatListView}>
                <Text style={styles.StoreName}>
                  {item.storeName.toUpperCase()}
                </Text>
                <Text style={styles.Address}>
                  {item.storeAddress}, {item.city}
                </Text>
              </View>
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
    backgroundColor: 'white',
  },
  spacing: {
    margin: 20,
  },
  Search: {
    marginRight: 20,
    marginTop: 10,
  },
  SelectStore: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  FlatListView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  StoreName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  SelectStoreView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20,
  },
  Address:{marginTop: 10,textTransform:'uppercase'}
});

const mapStateToProps = state => ({
  datas: state.datadisplayReducer.datastore,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  datalist: getdata,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Datalist);
