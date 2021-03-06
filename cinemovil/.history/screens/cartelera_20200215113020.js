
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';

const url = "http://192.168.0.106:3001/cineback/peliculas"

export default class Cartelera extends Component {

 
  
  render() {
    
  
    return (
      <Container style={styles.container}>
        
              
            <Grid>
              <Col style={{ height: 250, width: 170, backgroundColor: '#F0EBEB' }} onPress={() => this.props.navigation.navigate('Detalle')}>
                <Image
                  style={styles.pelicula}
                  source={{ uri:"/uploads/capitana-marve.jpg" }} 
                />
              </Col>
            </Grid>
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
    

  },
});
