import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native';

export function Header(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  console.log('modal: ', isModalVisible)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.text}
      </Text>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('./../assets/images/NewPost.png')}
        />
      </TouchableOpacity>

      
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!isModalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
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
  },
  buttonContainer: {
    paddingRight: 5
  }
})
