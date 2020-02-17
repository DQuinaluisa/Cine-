
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList, ActivityIndicator, View, Text } from 'react-native';

const url = "http://192.168.0.106:3001/peliculas";
const pick = "http://192.168.0.106:3001/uploads/";
export default class Cartelera extends Component {

  state = {
    refreshing: false
  };

  getData = () => {
     fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    this.getData();
  };


  render() {

    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ActivityIndicator size="large" />

        </View>

      );

    }

    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <Grid>
              <Col style={{ height: 200, width: 550, backgroundColor: '#F0EBEB' }} onPress={() => navigate('Detalle', { _id: item._id })}>
                <Text style={styles.titulo} >{item.titulo}</Text>
                <Image
                  style={styles.pelicula}
                  source={{ uri: pick + item.file }}
                />
              </Col>
            </Grid>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  },
  pelicula: {
    backgroundColor: '#FFFF',
    width: 290,
    height: 160,
    marginTop: 30,
    marginLeft: 15,
  },
  titulo: {
    left: 20,
    paddingTop: 25,
    fontSize: 15,
    textTransform: 'capitalize'

  }
});
