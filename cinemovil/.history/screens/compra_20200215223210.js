
import React, { Component } from "react";
import { Container, Content, Picker, Form, Text, CardItem, Body, Button, Item, Input } from "native-base";
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class Comprar extends Component {
  constructor() {
    super();
    this.state = {
      numeroBoletos: '',
      email: '',
      sala: '',
      pelicula: '',
      horario: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.agregarCompra = this.agregarCompra.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

  }

  agregarCompra(e) {
    e.preventDefault();
    fetch("http://localhost:3001/peliculas", {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert('Se guardo correctamente')
        this.setState({ sala: '', horario: '', email: '', pelicula: '', numeroBoletos: '' });
        this.getPeliculas();
      })
      .catch(err => console.error(err));


  }


  render() {
    return (
      <Container>
        <Content style={styles.form}>
          <KeyboardAvoidingView behavior="padding">
            <Form style={styles.formu} onSubmit={this.agrega}>
              <Text style={styles.texto}>Ingrese numero de sala:</Text>
              <Input
                name="sala" 
                onChange={this.handleChange} 
                value={this.state.sala}
                placeholder='sala 1' />
          </Form>
            <Form style={styles.formu}>
              <Text style={styles.texto}>Ingrese un horario:</Text>
              <Input
                name="horario" 
                onChange={this.handleChange} 
                value={this.state.horario}
                placeholder='16:00 - 18:00' />
          </Form>
            <Form style={styles.formu}>
              <Text style={styles.texto}>Ingrese numero de boletos:</Text>
              <Input
                name="numeroBoletos" 
                onChange={this.handleChange} 
                value={this.state.numeroBoletos}
                placeholder='1-5' />
          </Form>
            <CardItem style={styles.correo}>
              <Body>
                <Item >
                  <Input
                    name="correo" 
                    onChange={this.handleChange} 
                    value={this.state.correo}
                    placeholder='Correo Electronico' />
                </Item>
              </Body>
            </CardItem>
            <CardItem style={styles.botones}>
              <Body>
                <Body>
                  <Button danger style={styles.botones2} >
                    <Text>Comprar</Text>
                  </Button>
                </Body>
              </Body>
            </CardItem>
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
    paddingTop: 50

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
