import React from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {AppState} from './store';
import {setSecondText} from './store/second/actions';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface SecondProps {
  isLoading: boolean,
  secondText: string,
  setSecondText: typeof setSecondText
}

class Second extends React.Component<SecondProps> {

setNewText = (event: any)=> {   // TODO: follow https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208 and strengthen typing when that gets fixed.
    console.log("toggling, current state: ", this.props.secondText)
    this.props.setSecondText(event.currentTarget.value);
}

render() {
  return (
    <div className="Second">
      <header className="App-header">
        <p>
          text =  {this.props.secondText}
        </p>
        <form>
        <label>
          Name:
          <input type="text" value={this.props.secondText} onChange={this.setNewText} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>

        {this.props.isLoading ?
            'Loading'
          : 'Not loading'
        }
        <Link to='/'>
          go back
        </Link>
    </div>
  );
}}

const mapStateToProps = (state: AppState, routeProps: RouteComponentProps) => ({
  secondText: state.second.secondText,
  isLoading: state.feedback.isLoading
})

export default withRouter(connect(mapStateToProps, {setSecondText})(Second));
