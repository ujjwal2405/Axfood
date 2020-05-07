import React from 'react';
import {
 View,
 SafeAreaView,
 TextInput,
 Text,
 TouchableOpacity,
 FlatList,
 StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import {getdummyData} from '../Services/Dummy/action'
import {specificdummyData,updatedummyData,deletedummyData} from '../Services/Dummy/actionSpec'


class Dummy extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            salary:''
        }
    }

componentDidMount(){
    this.props.dummylist();
    
}

  render(){
    const {datas,specificData} = this.props
    console.warn(specificData)
    return(
        <SafeAreaView style={styles.container}>
          
          <TextInput
          placeholder="Name"
          placeholderTextColor="white"
            onChangeText={txt => this.setState({name: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TextInput
             placeholder="Age"
             placeholderTextColor="white"
            onChangeText={txt => this.setState({age: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TextInput
             placeholder="Salary"
             placeholderTextColor="white"
            onChangeText={txt => this.setState({salary: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TouchableOpacity
            onPress={()=>{
                this.props.specificlist(this.state.name,this.state.salary,this.state.age)
            }}
            >
                <View style={{backgroundColor:"black",padding:10}}>
                    <Text style={{color:"white"}}>Add Data</Text>
                </View>
            </TouchableOpacity>

        {/* <Text>{specificData.data.age}</Text> */}
           



            <TextInput
             placeholder="Name"
             placeholderTextColor="white"
            onChangeText={txt => this.setState({name: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TextInput
             placeholder="Age"
             placeholderTextColor="white"
            onChangeText={txt => this.setState({age: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TextInput
             placeholder="Salary"
             placeholderTextColor="white"
            onChangeText={txt => this.setState({salary: txt})}
            style={{padding:15,backgroundColor:"black",color:"white",width:"80%",marginVertical:10}}
            />

            <TouchableOpacity
            onPress={()=>{
                this.props.updatedList(this.state.name,this.state.salary,this.state.age,specificData.data.id)
            }}
            >
                <View style={{backgroundColor:"black",padding:10}}>
                    <Text style={{color:"white"}}>Update Data</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
                this.props.deletedList(specificData.data.id)
            }}
            >
                <View style={{backgroundColor:"black",padding:10,marginVertical:15}}>
                    <Text style={{color:"white"}}>Delete Data</Text>
                </View>
            </TouchableOpacity>




            
            <FlatList
            data={datas.data}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>{item.employee_name}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />

           

        </SafeAreaView>
    )
}


}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    }
})
const mapStateToProps = state => ({
    datas: state.dummydisplayReducer.dummystore,
    specificData:state.dummyspecificReducer.specificdata,
    updatedData:state.dummyspecificReducer.updatedata,
    deletedData:state.dummyspecificReducer.deletedata
  });
  
  const mapDispatchToProps = {
    dummylist: getdummyData,
    specificlist:specificdummyData,
    updatedList:updatedummyData,
    deletedList:deletedummyData
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dummy);





   {/* <View style={{backgroundColor:"red"}}>
            <Text>{specificData.data.employee_name}</Text>
            </View> */}