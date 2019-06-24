import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.text}
      </Text>

      <TouchableOpacity onPress={openCreatePost}>
        <Image
          style={styles.button}
          source={require('./../assets/images/NewPost.png')}
        /> 
      </TouchableOpacity>

    </View>
  );
}

function openCreatePost() {
  console.log('button pressed!')
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
})
