import React from 'react'
import { ReduxState } from '../store'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Loading extends React.Component {
  render() {
    return (
      <View>
        <Text>loading</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  return (
    Object.assign({}, {})
  )
}

const mapDispatchToProps = dispatch => {
  return (
    Object.assign({}, {})
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
