import { connect } from 'react-redux'
import { deleteChat, resendChat } from '../actions'
import ChatItem from '../components/ChatItem'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteChat(ownProps.id)),
  resend: () => dispatch(resendChat(ownProps.id, ownProps.name, ownProps.message))
})

export default connect(
  null,
  mapDispatchToProps
)(ChatItem)
