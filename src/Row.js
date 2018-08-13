import React from 'react';
import { StyleSheet, Text, View, Button, TouchableNativeFeedback, Alert, Image } from 'react-native';
import { Font } from 'expo';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  //orange: E59500

  async componentDidMount() {
    await Font.loadAsync({
      'raspoutine-classic': require('../assets/fonts/RaspoutineClassic_TB.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false,
  }

  render() {

    async function playCallback() {
      this.props.play(this.props.elem.key);
    }

    return(
      <View style={styles.row}>
        <TouchableNativeFeedback onPress={playCallback.bind(this)}>
          <View style={styles.container}>
            {this.state.fontLoaded ? <Text style={styles.text}>{this.props.elem.quote}</Text> : null}
          </View>
        </TouchableNativeFeedback>
        <View style={styles.divider}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    height: 58,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'raspoutine-classic',
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#fff",
    width: '100%',
  },
});
