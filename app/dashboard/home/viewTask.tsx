import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';

const viewTask = () => {
    const [priority, setPriority] = useState('High');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData("title");
    }, []);
  
    const fetchData = async (keys: string) => {
      try {
        const values:any = await SecureStore.getItemAsync('title');
        
        setData(values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log(data)
  return (
    <SafeAreaView style={styles.mainContainer}>

<FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => 
        // <View style={styles.listItem}>
          <Text>{item}</Text>
        // </View>
      }
    />
     
    </SafeAreaView>
  )
}

export default viewTask

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    // ... Other styles ...
    listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  });