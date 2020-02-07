import React from 'react'
import { ReduxState } from '../store'
import { connect } from 'react-redux'

class Home extends React.Component {

}

const mapStateToProps = (state: ReduxState) => {
}

const mapDispatchToProps = dispatch => {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
