
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';

const url = "http://192.168.0.106:3001/peliculas"

export default class Cartelera extends Component {

  state = {
    data: [],
    refreshing: false

  };

  fetchData = async () => {
    const response = await fetch(url);
    const peliculas = await response.json(); // products have array data
    this.setState({ data: peliculas }); // filled data with dynamic array
  };

  componentDidMount() {
    this.fetchData();
  };


  render() {


    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Grid>
              <Col style={{ height: 50, width: 570, backgroundColor: '#F0EBEB' }} onPress={() => this.props.navigation.navigate('Detalle')}>
                <Image
                  style={styles.pelicula}
                  source={{ uri: item.file }}
                />
              </Col>
            </Grid>
          }
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
    backgroundColor: '#F',
    width: 540,
    height: 190,
    marginTop: 30,
    marginLeft: 15,


  },
});
