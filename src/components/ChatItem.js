import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function ChatItem(props) {
  return <View style={styles.item}>
  <Text style={styles.authorHeader}>
  {props.name + ': ' + props.message}
  </Text>
  {!props.sent &&
        <Text style={styles.networkError}>
          network failed, please check your connections
        </Text>
      }
      <Button onPress={props.sent ? props.onDelete : props.resend} title={props.sent ? 'x' : 'resend'} />
  </View>
}

const styles = StyleSheet.create({
  networkError: {
    color: "red",
    fontSize: 8
  },
  authorHeader: {
    color: "green",
    fontSize: 17
  },
  message: {
    fontSize: 10
  },
  item: {
    padding: 10,
    height: 70,
  }
});

export default ChatItem;
