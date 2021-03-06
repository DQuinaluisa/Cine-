
import React, { Component } from 'react';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';

const url = "http://192.168.0.106:3001/peliculas"

export default class Cartelera extends Component {
  
  state={
		data:[],
		refreshing: false

  };
  
  fetchData = async() =>{
		const { params } = this.props.navigation.state;
		const response =  await fetch('https://hardeepwork.000webhostapp.com/laravel/LaraShop55/api/products/' + params.id);
		const products = await response.json(); // products have array data
		this.setState({data: products}); // filled data with dynamic array
	};
	componentDidMount(){
		this.fetchData();
	};
  
  
  render() {
    
  
    return (
      <Container style={styles.container}>
        
              
            <Grid>
              <Col style={{ height: 250, width: 170, backgroundColor: '#F0EBEB' }} onPress={() => this.props.navigation.navigate('Detalle')}>
                <Image
                  style={styles.pelicula}
                  source={{ uri:"http://192.168.0.106:3001/uploads/capitana-marve.jpg" }} 
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
