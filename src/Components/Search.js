import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import {searchdata} from '../Services/Search/action';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
      product: '',
    };
  }


  render() {
    const {datas} = this.props;
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          onChangeText={find => {
              if(find && find.length > 2){
                this.props.searchdatalist(this.props.header,find)
              }
            }}
             
          placeholder="search"
        />

        <FlatList
          data={datas}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.spacing}>{item.productId}</Text>
                <Text style={styles.spacing}>{item.productName}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'silver',
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
