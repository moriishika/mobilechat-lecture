const API_URL = 'http://192.168.1.8:3001/api/'

// start load chat data
const loadChatSuccess = (chats) => ({
  type: 'LOAD_CHAT_SUCCESS',
  chats
})

const loadChatFailure = () => ({
  type: 'LOAD_CHAT_FAILURE'
})

export const loadChat = () => {
  return dispatch => {
    return fetch(`${API_URL}chats`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(loadChatSuccess(responseJson))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadChatFailure())
    });
  }
}

// end load chat data


// start post chat data

const postChatSuccess = (chats) => ({
  type: 'POST_CHAT_SUCCESS',
  chats
})

const postChatFailure = (id) => ({
  type: 'POST_CHAT_FAILURE', id
})

const postChatRedux = (id, name, message) => ({
  type: 'POST_CHAT', id, name, message
})


export const postChat = (name, message) => {
  let id = Date.now();
  return dispatch => {
    dispatch(postChatRedux(id, name, message))
    return fetch(`${API_URL}chats`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, message})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(postChatSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(postChatFailure(id))
    });
  }
}

// end post chat

// start delete chat data

const deleteChatRedux = (id) => ({
  type: 'DELETE_CHAT', id
})

const deleteChatSuccess = (chats) => ({
  type: 'DELETE_CHAT_SUCCESS',
  chats
})

const deleteChatFailure = () => ({
  type: 'DELETE_CHAT_FAILURE'
})


export const deleteChat = (id) => {
  return dispatch => {
    dispatch(deleteChatRedux(id))
    return fetch(`${API_URL}chats/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(deleteChatSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(deleteChatFailure())
    });
  }
}

// end delete chat data

export const resendChat = (id, name, message) => {
  return dispatch => {
    return request.post('chats', {id, name, message})
    .then(function (response) {
      dispatch(postChatSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(postChatFailure(id))
    });
  }
}
