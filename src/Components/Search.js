import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Image
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
    const {datas,navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
         <View style={{flexDirection:"row"}}>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Datalist')
          }}>
         <Image
            source={require('../Assets/LeftChevron.png')}
            style={{marginTop:26,marginLeft:20}}
          />
       </TouchableOpacity>
         
         <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          onChangeText={find => {
              if(find && find.length > 2){
                this.props.searchdatalist(this.props.header,find)
              }
            }}
             
          placeholder="Search.."
        />
          </View>

<View style={{marginTop:5,backgroundColor:"silver",height:3,opacity:0.3}}/>

        <FlatList
          data={datas}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.spacing}>{item.productName}</Text>
                <View style={{marginTop:5,backgroundColor:"silver",height:1}}/>
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
    backgroundColor:"white"
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
    backgroundColor:"white"
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
