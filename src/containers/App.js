import React, { Component } from 'react';
import '../scss/App.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/bootstrap.min.css';
import * as B from 'reactstrap';
import Navbar from '../components/Navbar';
import Developer from '../components/Developer';
import CarouselSet from '../components/CarouselSet';
import Ucla from '../components/Ucla';
import OregonState from '../components/OregonState';
import MyApps from '../components/MyApps';

class App extends Component {
    render() {
        return (
          <B.Container>
              <Navbar />
              <Developer />
              <CarouselSet />
              <Ucla />
              <OregonState />
              <MyApps />
          </B.Container>
        );
  }
}

export default App;
