
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList } from 'react-native';

export default class Cartelera extends Component {
  state = {
    peliculas: []
  };

  componentDidMount() {
    this.getPeliculas();
  }

  getPeliculas = async () => {
    const response = await fetch('http://localhost:3001/peliculas');
    const json = await response.json();
    this.setState({ peliculas: json.results });
  }
  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          personas = {this.state.personas}
          renderItem={({ item }) =>
            
                <Image
                  style={styles.pelicula}
                    source={{uri: item.file}}
                />
              
          }
          keyExtractor={item => item._id}
        />


      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  },
  pelicula: {
    width: 140,
    height: 190,
    marginTop: 30,
    marginLeft: 15,
    backgroundColor: '#FFFF'

  },
});
