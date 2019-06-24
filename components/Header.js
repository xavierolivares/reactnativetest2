import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        { props.text }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#dadada',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
