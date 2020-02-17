
import React, { Component } from "react";
import { Container, Content, Picker, Form, Text, CardItem, Body, Button, Item, Input } from "native-base";
import { StyleSheet, KeyboardAvoidingView  } from 'react-native';

export default class Comprar extends Component {

  render() {
    return (
      <Container>
        <Content style={styles.form}>
          <Form style={styles.formu}>
            <Text style={styles.texto}>Seleccione una sala:</Text>
            <Picker
              mode="dropdown"
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
            >
              <Picker.Item label="Sala 1" />
              <Picker.Item label="Sala 2" />
              <Picker.Item label="Sala 3" />
              <Picker.Item label="Sala 4" />
              <Picker.Item label="Sala 5" />
            </Picker>
          </Form>
          <Form style={styles.formu}>
            <Text style={styles.texto}>Seleccione un horario:</Text>
            <Picker
              mode="dropdown"
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
            >
              <Picker.Item label="Horario 1" />
              <Picker.Item label="Horario 2" />
              <Picker.Item label="Horario 3" />

            </Picker>
          </Form>
          <Form style={styles.formu}>
            <Text style={styles.texto}>Numero de boletos:</Text>
            <Picker
              mode="dropdown"
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
            >
              <Picker.Item label="1" />
              <Picker.Item label="2" />
              <Picker.Item label="3" />
              <Picker.Item label="4" />
              <Picker.Item label="5" />
            </Picker>
          </Form>
          <CardItem style={styles.correo}>
            <Body>
              <Item >
                <Input
                  placeholder='Correo Electronico' />
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
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingTop: 5,
    paddingLeft: 40,
    paddingRight: 40

  },
  formu: {
    paddingTop: 40
  },
  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
      right: 7,
  },
  correo: {
    paddingTop: 40,
    position: "relative"
  
  }, 
  texto:{
    fontSize: 18,
    paddingBottom: 10
  }
});
