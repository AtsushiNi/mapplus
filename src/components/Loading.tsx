import React from 'react'
import { connect } from 'react-redux'
import { thunkToAction } from 'typescript-fsa-redux-thunk'
import { View, Text, Button } from 'react-native'
import { bindActionCreators, Dispatch } from 'redux'
import { NavigationActions } from 'react-navigation'
import { userModule } from '../modules'

interface LoadingProps {
  getUser: typeof userModule.getUser
  navigate: typeof NavigationActions.navigate
}

interface LoadingState {}

class Loading extends React.Component<LoadingProps, LoadingState> {
  componentDidMount() {
    this.props.getUser()
  }

  handleClick() {
    console.log('clicked')
    this.props.getUser()
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'aqua', justifyContent: 'center'}}>
        <Text>loading</Text>
          <Button title='click'onPress={() => this.handleClick()} color='red'/>
      </View>
    )
  }
}

const mapStateToProps = (state: any)  => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUser: thunkToAction(userModule.getUser.action),
    navigate: NavigationActions.navigate
  },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
