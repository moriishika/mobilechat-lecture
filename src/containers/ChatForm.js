import React from 'react';
import { connect } from 'react-redux';
import { postChat  } from '../actions';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', message: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  handleChangeMessage(value) {
    this.setState({message: value});
  }

  handleSubmit() {
    this.props.postChat(this.state)
    this.setState({name: '', message: ''});
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View  style={{padding: 10, flex: 1}}>
        <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
        />
        <TextInput style={{height: 40}} placeholder="masukkan nama" onChangeText={this.handleChangeName} />
        <TextInput style={{height: 40}} placeholder="masukkan pesan" onChangeText={this.handleChangeMessage} />
        <Button onPress={this.handleSubmit} title="Kirim" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postChat: (chat) => dispatch(postChat(chat.name, chat.message)),
})

export default connect(
  null,
  mapDispatchToProps
)(ChatForm)
