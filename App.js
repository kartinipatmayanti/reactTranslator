import React, {Component} from 'react';
import {View} from 'react-native';
import Translator from './Translator/Translator';
export default class App extends Component {
  render() {
    return (
      <View>
        <Translator />
      </View>
    );
  }
}
