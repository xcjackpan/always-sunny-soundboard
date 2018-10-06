import React from 'react';
import Row from './src/Row.js';
import Board from './src/Board.js';
import { StyleSheet, Text, ScrollView, View, Image, TouchableWithoutFeedback, Alert, Button, Linking } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'androgyne-medium': require('./assets/fonts/Androgyne_TB.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false,
    filter: 'all',
  }

  render() {
    function pickCharlie() {
      if (this.state.filter === 'charlie') {
        this.setState({ filter: 'all' });
      } else {
        this.setState({ filter: 'charlie' });
      }
    }

    function pickDee() {
      if (this.state.filter === 'dee') {
        this.setState({ filter: 'all' });
      } else {
        this.setState({ filter: 'dee' });
      }
    }

    function pickFrank() {
      if (this.state.filter === 'frank') {
        this.setState({ filter: 'all' });
      } else {
        this.setState({ filter: 'frank' });
      }
    }

    function pickDennis() {
      if (this.state.filter === 'dennis') {
        this.setState({ filter: 'all' });
      } else {
        this.setState({ filter: 'dennis' });
      }
    }

    function pickMac() {
      if (this.state.filter === 'mac') {
        this.setState({ filter: 'all' });
      } else {
        this.setState({ filter: 'mac' });
      }
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.titlebox}>
          {this.state.fontLoaded ? <Text style={styles.title}>"The Gang Gets a Soundboard"</Text> : null}
          {/*<Image source={require('./assets/img/rumham.png')}
                 style={styles.rumham}/>*/}
          <View style={styles.controlbox}>
            <TouchableWithoutFeedback onPress={pickCharlie.bind(this)}>
              <View>
              {(this.state.filter == "charlie" || this.state.filter == "all") ? <Image source={require('./assets/img/charlie.png')}
                                                                                       style={styles.faces}/>
                                                                              : <Image source={require('./assets/img/greycharlie.png')}
                                                                                       style={styles.faces}/>}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={pickDee.bind(this)}>
              <View>
              {(this.state.filter == "dee" || this.state.filter == "all") ? <Image source={require('./assets/img/dee.png')}
                                                                                   style={styles.faces}/>
                                                                          : <Image source={require('./assets/img/greydee.png')}
                                                                                   style={styles.faces}/>}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={pickFrank.bind(this)}>
              <View>
              {(this.state.filter == "frank" || this.state.filter == "all") ? <Image source={require('./assets/img/frank.png')}
                                                                                     style={styles.faces}/>
                                                                            : <Image source={require('./assets/img/greyfrank.png')}
                                                                                     style={styles.faces}/>}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={pickDennis.bind(this)}>
              <View>
              {(this.state.filter == "dennis" || this.state.filter == "all") ? <Image source={require('./assets/img/dennis.png')}
                                                                                      style={styles.faces}/>
                                                                             : <Image source={require('./assets/img/greydennis.png')}
                                                                                      style={styles.faces}/>}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={pickMac.bind(this)}>
              <View>
              {(this.state.filter == "mac" || this.state.filter == "all") ? <Image source={require('./assets/img/mac.png')}
                                                                                   style={styles.faces}/>
                                                                          : <Image source={require('./assets/img/greymac.png')}
                                                                                   style={styles.faces}/>}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Board filter={this.state.filter}/>
        <View style={styles.privacy}>
          <Button title="View Privacy Policy" color="#111111" onPress={ ()=>{ Linking.openURL('http://xcjackpan.me/dist/alwayssunnyprivacy.html')}} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#111111',
  },
  titlebox: {
    flex: 1,
    paddingTop: 80,
    height: 320,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  title: {
    flex: 2,
    width: '85%',
    color: '#fff',
    fontSize: 36,
    fontFamily: 'androgyne-medium',
    textAlign: 'center',
    zIndex: 1,
  },
  controlbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  faces: {
    height: 70,
    width: 70,
  },
  privacy: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  }
});