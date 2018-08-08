import React from 'react';
import Row from './Row.js';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.soundclips = [{quote:"Wildcard, bitches! Yeeeeeehaw!", char:"charlie", key:1}, 
                       {quote:"Can I offer you a nice egg in this trying time?", char:"frank", key:2}];
  }

  state = {
    first: true,
  }

  render() {
    const divider = <View style={styles.divider}></View>;

    async function playSound(key) {
      /*
      if (this.state.playing) {
        try {
          this.playbackInstance.pauseAsync();
        } catch(error) {
          Alert.alert("ahh");
        }
      }
      try {
        await this.playbackInstance.loadAsync(require('../assets/sound/22.mp3'));
        this.playbackInstance.playAsync();
        this.setState({ playing: true });
      } catch(error) {

      }
      */
      if (this.state.first) {
        this.playbackInstance = new Expo.Audio.Sound()
        this.setState({ first: false });
      } else {
        await this.playbackInstance.stopAsync();
        await this.playbackInstance.unloadAsync();
      }


      switch (key) {
        case 1:
          await this.playbackInstance.loadAsync(require('../assets/sound/wildcardbitches.mp3'));
          await this.playbackInstance.playAsync();
          break;
        case 2:
          await this.playbackInstance.loadAsync(require('../assets/sound/niceegg.mp3'));
          await this.playbackInstance.playAsync();
          break;
        default:
          await this.playbackInstance.loadAsync(require('../assets/sound/wildcardbitches.mp3'));
          await this.playbackInstance.playAsync();
          break;
      }
      // Your sound is playing!
    }

    return(
      <View style={styles.container}>
        <View style={styles.divider}></View>
        {/* based on this.props.filter, modify the array that you iterate through for your quotes */}
        {this.props.filter != "all" ? this.soundclips.filter(elem => (elem.char == this.props.filter)).map((elem) => <Row elem={elem}
                                                                                                                          key={elem.key}
                                                                                                                          play={playSound.bind(this)} />)
                                    : this.soundclips.map((elem) => <Row elem={elem}
                                                                         key={elem.key}
                                                                         play={playSound.bind(this)} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#02040F',
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#fff",
    width: '100%',
  }
});
