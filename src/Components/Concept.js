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
import {getConceptdata} from '../Services/Concept/action';
import {colors} from '../Config/constants'
import AsyncStorage from '@react-native-community/async-storage'

class Concept extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.conceptlist(this.props.header);
//     AsyncStorage.setItem('key',this.props.header)
    
//     AsyncStorage.getItem('key').then(value=>{
//             this.props.conceptlist(value);
//          })
 
//   }

//   logout=()=>{
//       AsyncStorage.clear()
//       this.props.navigation.navigate('Home')
//   }
  }
  render() {
    const {datas,navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Concept}>
          <Text style={styles.SelectConcept}>Select Concept</Text>
       
       
     
          
          
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
        <View style={styles.margintop}>
          <FlatList
            data={datas}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Datalist');
                  }}>
                  <View style={styles.Name}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  spacing: {
    margin: 20,
  },
  Concept: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 20,
  },
  margintop: {
    marginTop: 10,
  },
  SelectConcept: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  Search: {
    marginRight: 20,
    marginTop: 10,
  },
  Name: {
    marginTop: 40,
    marginLeft: 40,
  },
});

const mapStateToProps = state => ({
  datas: state.conceptdisplayReducer.conceptstore,
  header: state.homeReducer.header,
});

const mapDispatchToProps = {
  conceptlist: getConceptdata,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concept);
