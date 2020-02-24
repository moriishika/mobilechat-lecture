import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import ChatBox from './src/components/ChatBox';
import ChatForm from './src/containers/ChatForm';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator({
  Home: {screen: ChatBox},
  Add: {screen: ChatForm}
  },{
    initialRouteName: 'Home'
  });

  const AppContainer = createAppContainer(RootStack);



  export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
      );
    }
  }
