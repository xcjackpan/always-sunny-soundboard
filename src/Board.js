import React from 'react';
import Row from './Row.js';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.playbackInstance = null;
    this.soundclips = [{quote: "Wildcard!", char:["charlie"], key:"wildcard"},
                       {quote: "You must excuse me, I've grown quite weary.", char:["charlie"], key:"weary"},
                       {quote: "I'm the trash man!", char:["frank"], key:"trash"},
                       {quote: "I won't change my mind cause I'm an American.", char:["mac"], key:"american"},
                       {quote: "I won't change my mind regardless of the facts.", char:["mac"], key:"facts"},
                       {quote: "I'm eating because I'm very uncomfortable.", char:["dennis"], key:"eating"},
                       {quote: "That, I love. I absolutely love!.", char:["frank"], key:"love"},
                       {quote: "Later dudes. S U in your As.", char:["charlie"], key:"later"},
                       {quote: "Bullshit.", char:["frank"], key:"bullshit"},
                       {quote: "Derivative.", char:["frank"], key:"derivative"},
                       {quote: "AHHHH! RUMHAM!", char:["frank"], key:"rumham"},
                       {quote: "Aw sheiiiiiiiiiit.", char:["frank"], key:"sheit"},
                       {quote: "What is your spaghetti policy here?", char:["charlie"], key:"spaghetti"},
                       {quote: "Jesus, Frank!", char:["frank"], key:"jesus"},
                       {quote: "Euueauuuuueaaaaaaauuughhhꭜꭜꭜꭜꭜꭜꭜꭜꭜ", char:["mac"], key:"fatmac"},
                       {quote: "Call me that from now on: Mantis.", char:["frank"], key:"mantis"},
                       {quote: "WHY YOU LOOK SO STUPID?", char:["dee"], key:"stupid"},
                       {quote: "I'm sorry, IM JUST PLAYING!", char:["dee"], key:"playing"},
                       {quote: "Ready boys and girls? Cause here's when it gets good.", char:["charlie"], key:"ready"},
                       {quote: "Science is a liar sometimes!", char:["mac"], key:"science"},
                       {quote: "For the Sherlock Holmes look.", char:["charlie"], key:"holmes"},
                       {quote: "Tell me I'm good.", char:["dee"], key:"good"},
                       {quote: "I'm just the best goddamn bird lawyer in the world.", char:["charlie"], key:"bird"},
                       {quote: "Because of the implication.", char:["dennis"], key:"implication"},
                       {quote: "Goddammit.", char:["dee"], key:"goddammit"},
                       {quote: "Through God all things are possible.", char:["mac"], key:"god"},
                       {quote: "I eat stickers all the time, dude!", char:["charlie"], key:"stickers"},
                       {quote: "You don't really know what hot is, do ya?", char:["dennis"], key:"hot"},
                       {quote: "I'm a Swedish plumber, I'm here to fix your pipes.", char:["mac"], key:"plumber"},
                       {quote: "My roommate was a frog kid.", char:["frank"], key:"frog"},
                       {quote: "So much more romantic in the middle of nowhere.", char:["mac"], key:"decisions"},
                       {quote: "TOOLS! I HAVE TO HAVE MY TOOLS!", char:["dennis"], key:"tools"},
                       {quote: "A leather shop? In Arizona?", char:["dee"], key:"leather"}];
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
        case "ready":
          await this.playbackInstance.loadAsync(require('../assets/sound/gets_good.mp3'));
          break;
        case "bird":
          await this.playbackInstance.loadAsync(require('../assets/sound/bird_lawyer.mp3'));
          break;
        case "jesus":
          await this.playbackInstance.loadAsync(require('../assets/sound/jesus_frank.mp3'));
          break;
        case "sheit":
          await this.playbackInstance.loadAsync(require('../assets/sound/sheiit.mp3'));
          break;
        case "good":
          await this.playbackInstance.loadAsync(require('../assets/sound/im_good.mp3'));
          break;
        case "stupid":
          await this.playbackInstance.loadAsync(require('../assets/sound/stupid.mp3'));
          break;
        case "playing":
          await this.playbackInstance.loadAsync(require('../assets/sound/playing.mp3'));
          break;
        case "holmes":
          await this.playbackInstance.loadAsync(require('../assets/sound/sherlock_holmes.mp3'));
          break;
        case "later":
          await this.playbackInstance.loadAsync(require('../assets/sound/later_dudes.mp3'));
          break;
        case "rumham":
          await this.playbackInstance.loadAsync(require('../assets/sound/rumham.mp3'));
          break;
        case "god":
          await this.playbackInstance.loadAsync(require('../assets/sound/god.mp3'));
          break;
        case "love":
          await this.playbackInstance.loadAsync(require('../assets/sound/that_i_love.mp3'));
          break;
        case "facts":
          await this.playbackInstance.loadAsync(require('../assets/sound/regardless_of_facts.mp3'));
          break;
        case "science":
          await this.playbackInstance.loadAsync(require('../assets/sound/science.mp3'));
          break;
        case "plumber":
          await this.playbackInstance.loadAsync(require('../assets/sound/swedish_plumber.mp3'));
          break;
        case "goddammit":
          await this.playbackInstance.loadAsync(require('../assets/sound/goddammit.mp3'));
          break;
        case "decisions":
          await this.playbackInstance.loadAsync(require('../assets/sound/rash_decisions.mp3'));
          break;
        case "american":
          await this.playbackInstance.loadAsync(require('../assets/sound/change_my_mind.mp3'));
          break;
        case "mantis":
          await this.playbackInstance.loadAsync(require('../assets/sound/mantis.mp3'));
          break;
        case "trash":
          await this.playbackInstance.loadAsync(require('../assets/sound/the_trash_man.mp3'));
          break;
        case "frog":
          await this.playbackInstance.loadAsync(require('../assets/sound/frog_kid.mp3'));
          break;
        case "bullshit":
          await this.playbackInstance.loadAsync(require('../assets/sound/bullshit.mp3'));
          break;
        case "leather":
          await this.playbackInstance.loadAsync(require('../assets/sound/leather_shop.mp3'));
          break;
        case "implication":
          await this.playbackInstance.loadAsync(require('../assets/sound/the_implication.mp3'));
          break;
        case "hot":
          await this.playbackInstance.loadAsync(require('../assets/sound/hot.mp3'));
          break;
        case "derivative":
          await this.playbackInstance.loadAsync(require('../assets/sound/derivative.mp3'));
          break;
        case "eating":
          await this.playbackInstance.loadAsync(require('../assets/sound/uncomfortable.mp3'));
          break;
        case "stickers":
          await this.playbackInstance.loadAsync(require('../assets/sound/stickers.mp3'));
          break;
        case "tools":
          await this.playbackInstance.loadAsync(require('../assets/sound/tools.mp3'));
          break;
        case "weary":
          await this.playbackInstance.loadAsync(require('../assets/sound/weary.mp3'));
          break;
        case "spaghetti":
          await this.playbackInstance.loadAsync(require('../assets/sound/spaghetti_policy.mp3'));
          break;
        case "fatmac":
          await this.playbackInstance.loadAsync(require('../assets/sound/augh.mp3'));
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
