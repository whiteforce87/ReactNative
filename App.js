import { Button, StyleSheet, TextInput, View , Text, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoal, setEnteredGolText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText){
    setEnteredGolText(enteredText)
  }


  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => {
      return [...currentCourseGoals,enteredGoal]
    })
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={true}>
        {courseGoals.map((goal) =>
          <View style={styles.goalItem} key={goal}>
             <Text style={styles.goalText} >{goal}</Text>
          </View>

        )}
          </ScrollView>
        </View>
    </View>
  );
}



const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    flex:1,
    paddingHorizontal:16
  },
  inputContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor: 'green'
  },
  textInput:{
    borderWidth:1,
    borderColor:'grey',
    width: '70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:3,
    marginTop:20
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    flex:5
    
  },
  goalText:{
    color:'white'

  }
});
