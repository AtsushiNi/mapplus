import { connect } from 'react-redux'
import React from 'react'
import { View, Text } from 'react-native'

class SignupScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Signup Screen</Text>
      </View>
    )
  }
}

export default connect()(SignupScreen)
