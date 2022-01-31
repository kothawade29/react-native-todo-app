import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput, Button, Keyboard} from 'react-native';


function Task(props) {
    
      return(
        <View style={styles.taskBoxView}>
          <Text style={styles.task}>{props.text}</Text>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    taskBoxView:{
        alignItems:"center",
    },
    task:{
        fontWeight:"bold",
        fontSize:30,
        marginRight:20
    }
  });

export default Task;