import * as React from 'react';

import { Boi } from './components/boi/boi';
import './styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <div className="background" />
        <Boi />
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Memster</h1>
          </header>
          <p className="App-intro">
            <p><span className="emoji-animation">💦</span> Давай, пробуй <span className="emoji-animation">💦</span></p>
            <a target="__blank" href="https://t.me/memser_bot">Тыц</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
