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
      return(
        <View style={styles.container}>
          <FlatList
          data={this.props.chats}
          renderItem={({item}) => <ChatItem
          key={item.id.toString()}
          chat={{...item}}
          />}
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
