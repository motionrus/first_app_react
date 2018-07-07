import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
              <div className="wrapper">
                <SayFullName name="Vasya" surname="Volkov" link="http://vk.com" />
                <SayFullName name="Vasya" surname="Pyata" link="http://vk.com" />
                <SayFullName name="Maks" surname="Loskutov" link="http://vk.com" />
              </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>  Мое имя {props.name}, фамия - {props.surname} </h1>
      <a href={props.link}> Cсылка на мой профиль </a>
    </div>
    )
}

export default App;
