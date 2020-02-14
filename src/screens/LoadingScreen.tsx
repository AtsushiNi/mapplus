import { connect } from 'react-redux'
import React from 'react'
import { View, Text } from 'react-native'

class LoadingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Loading Screen</Text>
      </View>
    )
  }
}

export default connect()(LoadingScreen)
