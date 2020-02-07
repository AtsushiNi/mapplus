import { ReduxState } from '../store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'

const mapStateToProps = (state: ReduxState) => ({
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
    },
    dispatch
  )
}

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home)
