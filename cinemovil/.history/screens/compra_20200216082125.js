
import React, { Component } from "react";
import { Container, Content, Picker, Form, Text, CardItem, Body, Button, Item, Input } from "native-base";
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

const url = "http://192.168.0.106:3001/compras";

export default class Comprar extends Component {
  
    

  render() {
    return (
      <Container>
        <Content style={styles.form}>
          <KeyboardAvoidingView behavior="padding">
            <Form onSubmit={this.agregarCompra}>
            <Form style={styles.formu} >
              <Text style={styles.texto}>Ingrese numero de sala:</Text>
              <Input
                type="text"
                name="sala"
                onChange={this.handleChange}
                value={this.state.sala}
                placeholder='' />
            </Form>
            <Form style={styles.formu} >
              <Text style={styles.texto}>Ingrese un horario:</Text>
              <Input
                name="horario"
                onChange={this.handleChange}
                value={this.state.horario}
                placeholder='' />
            </Form>
            <Form >
              <Text style={styles.texto}>Ingrese numero de boletos:</Text>
              <Body>
              <Item>
                <Input
                  name="numeroBoletos"
                  onChange={this.handleChange}
                  value={this.state.numeroBoletos}
                  placeholder='' />
              </Item>
              </Body>
            </Form>
            <Form >
              <Text style={styles.texto}>Ingrese numero de boletos:</Text>
              <Body>
              <Item>
                <Input
                  name="pelicula"
                  onChange={this.handleChange}
                  value={this.state.pelicula}
                  placeholder='' />
              </Item>
              </Body>
            </Form>
            <Form style={styles.correo} >
              <Body>
                <Item >
                  <Input
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    placeholder='Correo Electronico' />
                </Item>
              </Body>
            </Form>
            <CardItem style={styles.botones}>
              <Body>
                <Body>
                  <Button danger style={styles.botones2} >
                    <Text>Comprar</Text>
                  </Button>
                </Body>
              </Body>
            </CardItem>
            </Form>
          </KeyboardAvoidingView>
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
    paddingTop: 10

  },
  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
    right: 7,
    paddingBottom: 5
  },
  correo: {
    paddingTop: 20,
    position: "relative"

  },
  texto: {
    fontSize: 18,
    paddingBottom: 5,
    paddingTop: 5

  }
});
