
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';

export default class Detalle extends Component {
  render() {
    return (
      <Container >
        <Content>
        <KeyboardAvoidingView behavior="padding">
          <Card>
            <CardItem>
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
            <CardItem style={styles.container}>
              <Body>
                <Item >
                <Text>
                      Resumen
                </Text>
                </Item>
              </Body>
            </CardItem>
            <CardItem>
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
                      Titulo de Pelicula
                </Text>
                </Item>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Item >
                  <Input
                    placeholder='Sala' />
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
  
})