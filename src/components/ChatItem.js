import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function ChatItem(props) {
  return <View style={styles.item}>
  <Text style={styles.authorHeader}>
  {props.chat.name} - {props.chat.message}
  <Button onPress={props.chat.sent ? props.onDelete : props.resend} title={props.chat.sent ? 'x' : 'resend'} />
  </Text>
  {!props.chat.sent &&
        <Text style={styles.networkError}>
          network failed, please check your connections
        </Text>
      }
  </View>;
}

const styles = StyleSheet.create({
  networkError: {
    color: "red",
    fontSize: 8
  },
  authorHeader: {
    color: "green",
    fontSize: 12
  },
  message: {
    fontSize: 10
  },
  item: {
    padding: 10,
    height: 44,
  }
});

export default Item;
