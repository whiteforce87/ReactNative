import { View, TextInput, Button , StyleSheet, Modal, Image} from "react-native";
import { useState } from "react";


function GoalInput(props){
    
const [enteredGoal, setEnteredGolText] = useState('')

function goalInputHandler(enteredText){
    setEnteredGolText(enteredText)
  }

function addGoalHandler(){
    props.onAddGoal(enteredGoal);
    setEnteredGolText('');
}


return(
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/goal.png')}></Image>
        <TextInput style={styles.textInput} placeholder='Your course Goal' onChangeText={goalInputHandler}
        value={enteredGoal}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"></Button>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="f31282"></Button>
          </View>
        </View>
      </View>
  </Modal>
)
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        backgroundColor:'#311b6b'
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:"#e4d0ff",
        width: '90%',
        borderRadius: 6,
        padding:16,
        color:'white'
      },
      buttonContainer:{
        flexDirection:"row",
        marginTop: 16
      },
      button:{
        width: '90',
        marginHorizontal: 8
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      }
    }
);