import React, { Component } from 'react';
import AbilityList from './components/AbilityList';
import { connect } from 'react-redux';
import { MODIFY_ABILITY, SET_TOTAL_POINTS } from './actions/types'
import { adjustTotal } from "./actions";
import './App.css';

class App extends Component {

	handleOnClick() {
		console.log('SET_TOTAL_POINTS-click->', this.props.store);
		this.props.store.dispatch({
			type: SET_TOTAL_POINTS,
			adjustment: 1
		});
	}

	getTotalPoints({  }) {

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
						this.handleOnClick();
						console.log('?');
					}}>
						Click
					</button>
					<p>test: {this.props.totalPoints}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const total = state.filter((total) => total.id === 'TP');
	console.log('mapStateToProps===>',state, total);
	return { totalPoints: total[0].val };
};

// const mapDispatchToProps = dispatch => ({
// 	adjustTotal: id => dispatch(adjustTotal)
// });

export default connect(mapStateToProps)(App);
