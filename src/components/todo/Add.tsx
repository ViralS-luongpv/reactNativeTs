import React, { Component } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

interface Props {
  addToTodoList(txt: string): void;
  addMode: boolean;
  cancelAddMode(): void;
}

interface State {
  txt: string;
}

class Add extends Component<Props, State> {
  state: State = {
    txt: '',
  }

  constructor(props: Props) {
    super(props)
  }

  changeTxtHandler(value: string) {
    this.setState({ txt: value })
  }

  addHandler() {
    this.props.addToTodoList(this.state.txt)

    this.setState({
      txt: ''
    })
  }

  render() {
    return (
      <Modal
        visible={this.props.addMode}
        animationType="slide"
      >
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.txt}
            onChangeText={value => this.changeTxtHandler(value)}
            style={styles.txtInput}
            placeholder="Enter new task name..."
          />
          <View>
            <Button
              title="Add"
              onPress={() => this.addHandler()}
              color="green"
            />
            <Button
              title="Cancel"
              onPress={() => this.props.cancelAddMode()}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2c2',
    paddingBottom: 5,
    marginBottom: 10,
    width: '100%'
  },
  inputContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  actionArea: {
    alignContent: 'space-between',
    flexDirection: 'column',
  },
})

export default Add