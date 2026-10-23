import { Text, View, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/components/TodoItem";
import { StatusBar } from "expo-status-bar"

import Octicons from '@expo/vector-icons/Octicons'

export default function Index() {
  const [text, setText] = useState("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext)

  const handleAddTodo = () => {
    if (addTodo(text)) {
      setText('');
    }
  };

  const styles = createStyles(theme, colorScheme)

  /* Remove the theme line for having the component load it's own theme */

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
        <Pressable 
          onPress={() => setColorScheme(colorScheme==='light'? 'dark':'light')} 
          style={{marginLeft:10}}>
          {colorScheme==='dark'? 
            <Octicons name="moon" size={36} color={theme.text} selectable={undefined} style={{width:36}}/>:
            <Octicons name="sun" size={36} color={theme.text} selectable={undefined} style={{width:36}}/>}
        </Pressable>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onToggle={toggleTodo} onRemove={removeTodo} theme={theme}  />
        )}
        keyExtractor={todo => todo.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <StatusBar style={colorScheme==='dark'?'light':'dark'} />
    </SafeAreaView>
  );
}


function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background
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
      color: theme.text
    },
    input: {
      flex:1,
      borderWidth:1,
      borderRadius:5,
      padding:10,
      marginRight:10,
      fontSize:10,
      minWidth:0,
      color:theme.text,
      borderColor:"white",
      
    },
    button:{
      backgroundColor:theme.button,
      borderRadius:5,
      padding:10,
    },
    buttonText: {
      fontSize:10,
      color:"black"
    },
  });
}

