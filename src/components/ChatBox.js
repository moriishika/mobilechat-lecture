import React, {Component} from 'react';
import ChatList from '../containers/ChatList';
import {TouchableOpacity, Button, StyleSheet, Text, View} from 'react-native';

export default class ChatBox extends Component {

render() {
    return (
      <View style={styles.chatBox}>
        <Text style={styles.headerBox}>CHAT</Text>
        <ChatList />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
          <Text>Tulis Pesan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatBox: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    margin: 4,
    borderColor: "grey",
    backgroundColor: "white"
  },
  headerBox: {
    fontSize: 20,
    color: "brown"
  }
});
