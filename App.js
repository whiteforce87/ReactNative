import { StyleSheet, View , FlatList, Button} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {


const [courseGoals, setCourseGoals] = useState([])
const[modalVisible, setModalVisible] = useState(false)

function startAddGoalHandler(){
  setModalVisible(true)
}


function endAddGoalHandler(){
  setModalVisible(false)

}

function addGoalHandler(enteredGoal){
  setCourseGoals(currentCourseGoals => {
    return [...currentCourseGoals,{text:enteredGoal, id:Math.random().toString()}]
  })
  endAddGoalHandler();
}

function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id !== id)
  })
}



  return (
    <>
    <StatusBar style='light'></StatusBar>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      {modalVisible && <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={true} renderItem={(itemData) =>{
          return(
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}></GoalItem>
  
          )}
        } keyExtractor={(item, index) => {
          return item.id;
        }}>
       
          </FlatList>
        </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    flex:1,
    paddingHorizontal:16
    },
 
  goalsContainer:{
    flex:3,
    marginTop:20
  }
});
