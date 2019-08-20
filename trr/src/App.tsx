import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {AppState} from './store';
import {setIsLoading} from './store/feedback/actions';

interface AppProps {
  isLoading: boolean,
  setIsLoading: typeof setIsLoading
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.feedback.isLoading
})

export default connect(mapStateToProps, {setIsLoading})(App);
