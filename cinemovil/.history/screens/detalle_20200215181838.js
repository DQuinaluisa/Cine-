
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';

const url = "http://192.168.0.106:3001/peliculas";
const pick = "http://192.168.0.106:3001/uploads/";

export default class Detalle extends Component {
  state={
		data:[],
		refreshing: false

	};
	fetchData = async(_id) =>{
		
		const response =  await fetch(url + _id);
		const products = await response.json(); // products have array data
		this.setState({data: products}); // filled data with dynamic array
	};
	componentDidMount(){
		this.fetchData();
	};



  render() {
   
    return (
      <Container style={styles.container}>
        
        <Content>
          <KeyboardAvoidingView behavior="padding">
            <Card>
              <CardItem style={styles.card}>
                <Left>
                  <Body>
                    <Item >
                      <Text>
                        titulo
                    </Text>
                    </Item>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{ uri:''}} style={{ height: 150, width: 100, flex: 1 }}
                />
              </CardItem>
              <CardItem style={styles.card}>
                <Body>
                  <Item >
                    <Text>
                      resumen
                </Text>
                  </Item>
                </Body>
              </CardItem>
              <CardItem style={styles.card}>
                <Left>
                  <Item >
                    <Text>
                      categoria
                </Text>
                  </Item>
                </Left>
                <Right>
                  <Item >
                    <Text>
                      Horario
                </Text>
                  </Item>
                </Right>
              </CardItem>
              <CardItem style={styles.card}>
                <Body>
                  <Item >
                    <Text>
                      Sala
                </Text>
                  </Item>
                </Body>
              </CardItem>
              <CardItem style={styles.botones}>
                <Body>
                  <Body>
                    <Button danger style={styles.botones2} onPress={() => this.props.navigation.navigate('Compra')}>
                      <Text>Comprar</Text>
                    </Button>
                  </Body>
                </Body>
              </CardItem>
            </Card>
          </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
    right: 7,
  },
  container: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  card: {
    paddingTop: 25,
  }

})