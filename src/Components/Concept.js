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

class Concept extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.conceptlist(this.props.header);
  }

  render() {
    const {datas} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Concept}>
          <Text style={styles.SelectConcept}>Select Concept</Text>

            <TouchableOpacity>
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
  },
  spacing: {
    margin: 20,
  },
  Concept: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
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
