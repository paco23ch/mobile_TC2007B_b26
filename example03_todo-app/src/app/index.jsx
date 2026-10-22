import { Text, View, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import { data } from "@/data/todos"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Index() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(data.sort((a,b) => b.id - a.id));

  const addTodo = () => {
    if(text.trim()) {
      const newId = todos.length > 0 ? todos[0].id+1 : 1;
      console.log(newId);
      setTodos([{id: newId, title:text, completed:false}, ...todos]);
      setText('');
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo,completed: !todo.completed} : todo))
  }
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const renderItem = ({item}) => (
    <View style={styles.itemRow}>
      <Text 
        style={[styles.todoItem, item.completed && styles.completedText]}
        onPress={()=> toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons name="delete" size={24} color="red" />
      </Pressable>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Input your text"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
        contentContainerStyle = {{flexGrow:1}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  inputcontainer: {
    flexDirection: "row",
    marginBottom: 10,
    padding:10,
    width:"100%",
    maxWidth:1024,
    marginHorizontal:"auto",
    pointerEvents:"auto"
  },
  text: {
    fontSize:40,
    color:"white"
  },
  input: {
    flex:1,
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginRight:10,
    fontSize:10,
    minWidth:0,
    color:"white",
    borderColor:"white",
    
  },
  button:{
    backgroundColor:"white",
    borderRadius:5,
    padding:10,
  },
  buttonText: {
    fontSize:10,
    color:"black"
  },
  todoItem:{
    color:"white",
    flex:1,
    fontSize:18,
  },
  completedText:{
    color:"gray",
    textDecorationLine:'line-through',
    color:"gray"
  },
  itemRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:4,
    padding:10,
    borderBottomColor:'gray',
    borderBottomWidth:1,
    borderStyle:"solid",
    width:"100%",
    maxWidth:1024,
    marginHorizontal:"auto",
    pointerEvents:'auto'
  },

});
