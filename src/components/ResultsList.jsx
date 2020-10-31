import React from 'react'
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native';

export default function ResultsList({title, results}) {
  const navigation = useNavigation();
  if (!results.length) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }, 
  container: {
    marginBottom: 10,
  }
})
