
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

export default class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch("http://localhost:3001/peliculas")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.peliculas,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <Grid>
              <Col style={{ height: 250, width: 170, backgroundColor: '#F0EBEB' }} onPress={() => this.props.navigation.navigate('Detalle')}>
                <Image
                  style={styles.pelicula}
                  source={{ uri: item.file }}
                />
              </Col>
            </Grid>
          }
          keyExtractor={({id})}
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
