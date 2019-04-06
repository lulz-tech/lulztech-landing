import * as React from 'react';

import { AppIntro } from './components/app-intro/app-intro';
import { AppTitle } from './components/app-title/app-title';
import { Boi } from './components/boi/boi';

import './styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <div className="background" />

        <Boi />

        <div className="App">
          <AppTitle />
          <AppIntro />
        </div>
      </div>
    );
  }
}

export default App;
