import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
  return <View style={styles.background}>
    <Feather name="search" style={styles.iconStyle}></Feather>
    <TextInput 
      placeholder="Search"
      style={styles.inputStyle}
      autoCapitalize="none"
      autoCorrect={false}
      value={term}
      onChangeText={onChangeTerm}
      onEndEditing={onTermSubmit}
    />
  </View>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E6E6E6',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize:18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
})

export default SearchBar