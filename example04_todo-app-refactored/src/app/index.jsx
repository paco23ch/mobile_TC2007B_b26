import { Text, View, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/components/TodoItem";

export default function Index() {
  const [text, setText] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

const handleAddTodo = () => {
    if (addTodo(text)) {
      setText('');
    }
  };

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
        <Pressable onPress={handleAddTodo} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onToggle={toggleTodo} onRemove={removeTodo} />
        )}
        keyExtractor={todo => todo.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
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
});
