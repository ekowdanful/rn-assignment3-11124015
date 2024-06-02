import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Task;
