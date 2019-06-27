import React, { Component } from 'react';
import { Modal, TextInput, View, TouchableHighlight, Text } from 'react-native';

export class CreatePost extends Component {
  constructor(props) {
    super(props)
    console.log('props: ', props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={{ marginTop: 22 }}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Tell your friends something here..."
            value={""} />

          <TouchableHighlight
            onPress={() => {
              this.props.closeModal()
            }}>
            <Text>Close Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }
}