import { Text, View, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

export const TodoItem = React.memo(({ item, onToggle, onRemove }) => {
  const { theme } = useContext(ThemeContext);
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
        <MaterialCommunityIcons name="delete" size={24} color="red" />
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
    },
    completedText: {
      color: "gray",
      textDecorationLine: 'line-through',
    },
  });
}