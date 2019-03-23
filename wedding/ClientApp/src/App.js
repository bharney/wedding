import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Events } from './components/Events';
import { Lodging } from './components/Lodging';
import { Registry } from './components/Registry';
import { Rsvp } from './components/Rsvp';
import { Travel } from './components/Travel';
import { Wedding } from './components/Wedding';
import { ContactUs } from './components/ContactUs';
import { RsvpConfirmation } from './components/RsvpConfirmation';
import { ContactConfirmation } from './components/ContactConfirmation';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/events' component={Events} />
            <Route path='/lodging' component={Lodging} />
            <Route path='/registry' component={Registry} />
            <Route path='/rsvp' component={Rsvp} />
            <Route path='/travel' component={Travel} />
            <Route path='/wedding' component={Wedding} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/rsvpConfirmation' component={RsvpConfirmation} />
            <Route path='/contactConfirmation' component={ContactConfirmation} />
      </Layout>
    );
  }
}
