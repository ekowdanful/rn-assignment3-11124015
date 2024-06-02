DCIT202 Mobile Application Development Assignment 3

Project Description

This project is a task management application developed as part of the DCIT202 Mobile Application Development course. The application allows users to manage tasks across various categories, add new tasks, and view ongoing tasks. The design and functionality closely follow the provided UI mockup.

Component Usage

App.js

- Description: The main entry point of the application. It includes the overall structure and integrates all components.
- Key Components Used:
  - View
  - Text
  - ScrollView
  - FlatList
  - TextInput
  - Button
 - Code Example:
    javascript
    import React from 'react';
    import { View, Text, ScrollView, StyleSheet, FlatList, Button, TextInput } from 'react-native';
    import Category from './src/components/Category';
    import Task from './src/components/Task';

    const categories = [
      { id: '1', name: 'Exercise' },
      { id: '2', name: 'Study' },
      // ... other categories
    ];

    const tasks = [ 
      { id: '1', title: 'Go for a run' },
      { id: '2', title: 'Finish React Native project' },
      // ... other tasks
    ];

    const App = () => {
      const [task, setTask] = React.useState('');
      const [taskList, setTaskList] = React.useState(tasks);

      const addTask = () => {
        if (task.length > 0) {
          setTaskList([...taskList, { id: Date.now().toString(), title: task }]);
          setTask('');
        }
      };

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
            data={taskList}
            renderItem={({ item }) => <Task title={item.title} />}
            keyExtractor={item => item.id}
          />

          <Text style={styles.header}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={task}
            onChangeText={setTask}
          />
          <Button title="Add Task" onPress={addTask} />
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
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10,
      },
    });

    export default App;
    

Category.js

- Description: A functional component to display individual categories.
- Props:
  - name (string): The name of the category.
- Code Example
    javascript
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const Category = ({ name }) => {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        padding: 10,
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
      },
      text: {
        fontSize: 16,
      },
    });

    export default Category;
    


