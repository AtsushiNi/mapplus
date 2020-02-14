import { connect } from 'react-redux'
import React from 'react'
import { View, Text } from 'react-native'

class SigninScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Signin Screen</Text>
      </View>
    )
  }
}

export default connect()(SigninScreen)
