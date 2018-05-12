import React, { Component } from 'react';
import AbilityList from './components/AbilityList';
import { connect } from 'react-redux';
import { MODIFY_ABILITY, SET_TOTAL_POINTS } from './actions/types'
import { adjustTotal } from "./actions";
import './App.css';

class App extends Component {

	handleOnClick() {
		console.log('-->', this.props.store);
		this.props.store.dispatch({
			type: SET_TOTAL_POINTS
		});
	}

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Builder v0.02</h1>
        </header>
        <div>
					{/*<AbilityList*/}

					{/*/>*/}
					<button onClick={() => {
						adjustTotal(1);
						console.log('?');
					}}>
						Click
					</button>
					<p>{this.props.totalPoints}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, test) => {
	console.log('===>',state, test);
	return { totalPoints: state.totalPoints };
};

const mapDispatchToProps = dispatch => ({
	adjustTotal: id => dispatch(adjustTotal)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
