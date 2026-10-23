import { Text, View, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {  } from '@expo-google-fonts/coming-soon'
import {  } from '@expo-google-fonts/saira'
import React, {useContext} from "react";


//import { ThemeContext } from "../context/ThemeContext";

//Fonts
//npx expo install expo-font expo-splash-screen @expo-google-fonts/inter
//https://directory-by-atiladev-com.netlify.app/
//https://docs.expo.dev/develop/user-interface/fonts/?st_source=ai_overview
//https://github.com/expo/google-fonts

//Storage
//https://docs.expo.dev/develop/user-interface/store-data/

export const TodoItem = React.memo(({ item, onToggle, onRemove, theme }) => {
  //const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <View style={styles.itemRow}>
      <Text 
        style={[styles.todoItem, item.completed && styles.completedText]}
        onPress={() => onToggle(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => onRemove(item.id)}>
        <MaterialCommunityIcons name="delete" size={24} color='red' />
      </Pressable>
    </View>
  );
});

function createStyles(theme) {
  return StyleSheet.create({
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      padding: 10,
      borderBottomColor: theme.text,
      borderBottomWidth: 1,
      width: "100%",
      maxWidth: 1024,
      marginHorizontal: "auto",
    },
    todoItem: {
      color: theme.text,
      flex: 1,
      fontSize: 18,
      fontFamily: "Saira_500Medium"
    },
    completedText: {
      color: "gray",
      textDecorationLine: 'line-through',
    },
    icon: {
      color: theme.icon,
    }
  });
}