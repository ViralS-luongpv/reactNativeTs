/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { PureComponent } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import Add from './src/components/todo/Add'
import Item from './src/components/todo/Item'

export interface Task {
  id: string,
  txt: string,
  completed: boolean,
}

interface IState {
  data: Task[],
  addMode: boolean
}

class App extends PureComponent<IState> {
  state: IState

  constructor(props: any) {
    super(props)
    this.state = {
      data: [
        {
          id: Math.random().toString(),
          txt: 'Init task',
          completed: false,
        }
      ],
      addMode: false
    }

    this.addToTodoList = this.addToTodoList.bind(this)
    this.removeTaskComplete = this.removeTaskComplete.bind(this)
    this.cancelAddMode = this.cancelAddMode.bind(this)
  }

  addToTodoList(txt: string): void {
    this.setState((oldState: IState) => {
      return {
        data: [...oldState.data, {
          id: Math.random().toString(),
          txt,
          completed: false,
        }],
        addMode: false,
      }
    })
  }

  cancelAddMode() {
    this.setState({
      addMode: false,
    })
  }

  removeTaskComplete(taskId: string): void {
    this.setState((oldState: IState) => {
      return {
        data: oldState.data.filter((item: Task) => {
          return item.id !== taskId
        })
      }
    })
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Add
          addToTodoList={this.addToTodoList}
          addMode={this.state.addMode}
          cancelAddMode={this.cancelAddMode}
        />
        <Button
          title="Add new item"
          onPress={() => this.setState({addMode: true})}
        />
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.data}
          renderItem={({ item }) => (
            <Item
              task={item}
              removeTaskComplete={this.removeTaskComplete}
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
})

export default App
