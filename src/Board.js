import React from 'react';
import Row from './Row.js';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.soundclips = [{quote:"I think I've been poisoned by my constituents!", char:["charlie"], key:"constituents"},
                       {quote:"Jesus, Frank!", char:["frank"], key:"jesus"},
                       {quote:"IDIOTS LITTLE IDIOTS!", char:["dennis"], key:"idiots"},
                       {quote:"I'm a Swedish plumber, I'm here to fix your pipes.", char:["mac"], key:"plumber"},
                       {quote:"I'm the trash man!", char:["frank"], key:"trash"},
                       {quote:"My roommate was a frog kid.", char:["frank"], key:"frog"},
                       {quote:"Wildcard, bitches! Yeeeeeehaw!", char:["charlie"], key:"wildcard"},
                       {quote:"TOOLS! I HAVE TO HAVE MY TOOLS!", char:["dennis"], key:"tools"},
                       {quote:"I eat stickers all the time, dude!", char:["charlie"], key:"stickers"}];
  }

  state = {
    first: true,
  }

  render() {
    const divider = <View style={styles.divider}></View>;

    function contains(elem, array) {
      var len = array.length;
      for (var i = 0; i < len; ++i) {
        if (array[i] === elem) {
          return true;
        }
      }
      return false;
    }

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
        case "wildcard":
          await this.playbackInstance.loadAsync(require('../assets/sound/wildcard_bitches.mp3'));
          break;
        case "constituents":
          await this.playbackInstance.loadAsync(require('../assets/sound/poisoned.mp3'));
          break;
        case "jesus":
          await this.playbackInstance.loadAsync(require('../assets/sound/jesus_frank.mp3'));
          break;
        case "idiots":
          await this.playbackInstance.loadAsync(require('../assets/sound/idiots.mp3'));
          break;
        case "plumber":
          await this.playbackInstance.loadAsync(require('../assets/sound/swedish_plumber.mp3'));
          break;
        case "trash":
          await this.playbackInstance.loadAsync(require('../assets/sound/the_trash_man.mp3'));
          break;
        case "frog":
          await this.playbackInstance.loadAsync(require('../assets/sound/frog_kid.mp3'));
          break;
        case "stickers":
          await this.playbackInstance.loadAsync(require('../assets/sound/stickers.mp3'));
          break;
        case "tools":
          await this.playbackInstance.loadAsync(require('../assets/sound/tools.mp3'));
          break;
      }
      await this.playbackInstance.playAsync();

    }

    return(
      <View style={styles.container}>
        <View style={styles.divider}></View>
        {/* based on this.props.filter, modify the array that you iterate through for your quotes */}
        {this.props.filter != "all" ? this.soundclips.filter(elem => (contains(this.props.filter, elem.char))).map((elem, index) => <Row key={index}
                                                                                                                                         elem={elem}
                                                                                                                                         play={playSound.bind(this)} />)
                                    : this.soundclips.map((elem, index) => <Row key={index}
                                                                                elem={elem}
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
