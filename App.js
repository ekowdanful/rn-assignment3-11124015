import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Button, TextInput } from 'react-native';
import Category from './src/components/Category';
import Task from './src/components/Task';

const categories = [
  { id: '1', name: 'Exercise' },
  { id: '2', name: 'Study' },
  { id: '3', name: 'Code' },
  { id: '4', name: 'Cook' },
  { id: '5', name: 'Read' },
  { id: '6', name: 'Shop' },
  { id: '7', name: 'Relax' },
  { id: '8', name: 'Sleep' },
];

const tasks = [
  { id: '1', title: 'Go for a run' },
  { id: '2', title: 'Finish React Native project' },
  { id: '3', title: 'Read a book' },
  { id: '4', title: 'Cook dinner' },
  { id: '5', title: 'Grocery shopping' },
  // add more tasks
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Task Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Category name={item.name} />}
        keyExtractor={item => item.id}
        horizontal
        style={styles.categoryList}
      />

      <Text style={styles.header}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task title={item.title} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    marginBottom: 20,
  },
});

export default App;
