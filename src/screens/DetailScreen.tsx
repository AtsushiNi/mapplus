import { connect } from 'react-redux'
import React from 'react'
import { View, Text } from 'react-native'

class DetailScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Detail Screen</Text>
      </View>
    )
  }
}

export default connect()(DetailScreen)
