import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Task } from '../../../App'

interface IProps {
  task: Task,
  removeTaskComplete(taskId: string): void,
}

const Item = (props: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.removeTaskComplete(props.task.id)}
    >
      <View style={styles.item}>
        <Text>{props.task.txt}</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 4,
  }
})

export default Item
