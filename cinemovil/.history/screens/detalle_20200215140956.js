
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';

export default class Detalle extends Component {
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
                      Titulo de Pelicula
                    </Text>
                  </Item>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'Image URL' }} style={{ height: 150, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem style={styles.card}>
              <Body>
                <Item >
                <Text>
                      Resumen
                </Text>
                </Item>
              </Body>
            </CardItem>
            <CardItem style={styles.card}>
              <Left>
                <Item >
                <Text>
                      Categoria
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
    paddingTop: 15,
  }
  
})