import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,ScrollView,FlatList} from 'react-native';

export default function App() {
  const [enteredGoal,setEnterGoal]= useState('');
  const [courseGoal,setCourseGoals]= useState([]);
  const goalInputHandler = (enterText)=>{
    setEnterGoal(enterText);
  }
  const addGoalHandeler = () =>{
    console.log(enteredGoal);
    setCourseGoals(cureentGoals => [...cureentGoals,enteredGoal]);
  }
  // const addGoalHandeler = () =>{
  //   console.log(enteredGoal);
  //   setCourseGoals(cureentGoals => [...cureentGoals,{key:Math.random().toString(),value:enteredGoal}]);
  // }


  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
       <TextInput
       placeholder="Enter Course Goal"
       style={styles.input}
       onChangeText={goalInputHandler}
       />
       <Button 
       title="Add +"
       onPress={addGoalHandeler}
       />

     </View>
     <ScrollView>
       {courseGoal.map((goal)=>
       <View key={goal}>
        <Text style={styles.listItem}>{goal}</Text>
       </View>)}
     </ScrollView>
     {/* <FlatList
     data={courseGoal}
     renderItem={itemData=>(
       <View style={styles.listItem}>
         <Text>{itemData.item.value}</Text>
       </View>
       
     )}
     /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
  input:{
    borderWidth:2,
    width:200,
    padding:10

  },
  listItem:{
    padding:10,
    backgroundColor:"#ccc",
    borderColor:"black",
    borderWidth:1,
    marginVertical:10
  }
});
