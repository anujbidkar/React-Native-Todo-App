import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,ScrollView,FlatList} from 'react-native';

import Goalitem from "./components/Goalitem";
import GoalInput from "./components/Goalinput";
export default function App() {
  const [courseGoal,setCourseGoals]= useState([]);
  const [ismodelOn,setismodelOn]= useState(false);
 
  // const addGoalHandeler = () =>{
  //   console.log(enteredGoal);
  //   setCourseGoals(cureentGoals => [...cureentGoals,enteredGoal]);
  // }
  const addGoalHandeler = goalTitle =>{
    setCourseGoals(cureentGoals => [{key:Math.random().toString(),value:goalTitle},...cureentGoals]);
    setismodelOn(false);
  }

  const removeGoalId = goalId =>{

    setCourseGoals(cureentGoals =>{
      console.log("started deleting");
      return cureentGoals.filter((goal) => goal.key !== goalId );
    })
    
  }

  const setItemfalse = ()=>{
    setismodelOn(false);

  }


  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={()=>{
        setismodelOn(true);
      } } />
      <GoalInput visiableItem={ismodelOn}  onAddGoal={addGoalHandeler}
      onDisable={setItemfalse}
      
      />    
      
      

     <FlatList
     data={courseGoal}
     renderItem={itemData=>(
       <Goalitem
       onDelete={
        removeGoalId.bind(this,itemData.item.key)
       }
       title={itemData.item.value}
       />
     )}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50
  },
 
});
