
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';

const url = "http://192.168.0.106:3001/peliculas";
const pick = "http://192.168.0.106:3001/uploads/";

export default class Detalle extends Component {
  state = {
    refreshing: false
  };

  getData = (_id) => {
     fetch(url, + _id)
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
    this.state.dataSource   
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
        <Content>
          <KeyboardAvoidingView behavior="padding">
            <Card>
              <CardItem style={styles.card}>
                <Left>
                  <Body>
                    <Item >
                      <Text style= {styles.titulo}>
                        {item.titulo}
                    </Text>
                    </Item>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{ uri: pick + item.file }} style={styles.pelicula}
                />
              </CardItem>
              <CardItem style={styles.card}>
                <Body>
                  <Item >
                    <Text style= {styles.titulo}>
                      {item.resumen}
                </Text>
                  </Item>
                </Body>
              </CardItem>
              <CardItem style={styles.card}>
                <Left>
                  <Item >
                    <Text style={styles.titulo}>
                      {item.categoria}
                </Text>
                  </Item>
                </Left>
                <Right>
                  <Item >
                    <Text style={styles.titulo}>
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
        }
        keyExtractor={(item, index) => index.toString()}
      />
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
  },
  titulo: {
    paddingBottom: 10,
    fontSize: 15,
    textTransform: 'uppercase'

  },
  pelicula: {
    backgroundColor: '#FFFF',
    width: 290,
    height: 160,
    marginLeft: 15,
  },

})