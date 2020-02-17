
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList } from 'react-native';

export default class Cartelera extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    this.getPeliculas();
  }

  getPeliculas() {
    fetch('http://localhost:3001/peliculas')
      .then(res => res.json())
      .then(data => {
        this.setState({ peliculas: data });
        console.log(this.state.peliculas);
      });
  }
  render() {
    return (
      <Container style={styles.container}>
        <FlatList
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
