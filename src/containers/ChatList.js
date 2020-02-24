import React, {Component} from 'react';
import ChatItem from './Chat';
import { connect } from 'react-redux';
import { loadChat } from '../actions';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class ChatList extends Component {

  componentDidMount(){
    this.props.loadChat();
  }

  render(){
    console.log('arrray kosong',this.props.chats);
      return(
        <View style={styles.container}>
        <FlatList
        data={this.props.chats}
        renderItem={({ item }) => <ChatItem name={item.name} message={item.message} sent={item.sent} id={item.id} />}
        keyExtractor={item => item.id.toString()}
      />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    }
  })

  const mapStateToProps = (state) => ({
    chats: state.chats
  })

  const mapDispatchToProps = (dispatch) => ({
    loadChat: () => dispatch(loadChat())
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatList)
