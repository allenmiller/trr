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
class App extends React.Component<AppProps> {
//const App: React.FC<AppProps> = () => {

toggleIsLoading = ()=> {
    console.log("toggling, current state: ", this.props.isLoading)
    this.props.setIsLoading(!this.props.isLoading);
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.toggleIsLoading}>
                  toggle
        </button>

        {this.props.isLoading ?
        <a
          className="App-link"
          href="/other-page"
          target="_blank"
          rel="noopener noreferrer"
        >
                  'Learn React'
        </a>
          : 'The link is gone.'
        }

      </header>
    </div>
  );
}}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.feedback.isLoading
})

export default connect(mapStateToProps, {setIsLoading})(App);
