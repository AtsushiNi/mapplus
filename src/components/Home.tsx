import React from 'react'
import { ReduxState } from '../store'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Home extends React.Component {
  render() {
    return (
      <View style= {{justifyContent: 'center'}}>
        <Text>home</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
}

const mapDispatchToProps = dispatch => {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
