import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './src/actions'
class App extends Component {


  onPressUp() {
    // this.props.dispatch({ type: 'UP' });
    this.props.actions('UP');
  }

  onPressDown() {
    this.props.actions('DOWN');
  }

  render() {

    return (
      <View style={styleApp.container}>
        <View style={styleApp.header}>
          <Text style={styleApp.appName}>EXAM 1: {'\n'}APP DEMO REDUX</Text>
          <Text style={styleApp.value}>{this.props.myValue}</Text>
        </View>
        <View style={styleController.controller}>
          <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
          <View style={styleController.buttonContainer}>
            <TouchableOpacity style={styleController.button} onPress={this.onPressUp.bind(this)}>
              <Text style={styleController.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleController.button} onPress={this.onPressDown.bind(this)}>
              <Text style={styleController.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { myValue: state.value };
}


export default connect(mapStateToProps, actions)(App);

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 30
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  appName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  value: {
    color: 'yellow',
    fontSize: 40
  }
});

const styleController = StyleSheet.create({
  controller: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    margin: 20
  },
  controllName: {
    fontSize: 20,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 25,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 40
  }
});
