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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Builder v0.02</h1>
        </header>
        <div>
					<AbilityList
						ability={this.props.statSheet[1][0]}
					/>
					<button onClick={() => {
						this.handleOnClick();
						console.log('?');
					}}>
						Click
					</button>
					<p>test: { console.log(this.props.statSheet)}{ this.props.statSheet[0][0].val}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	const total = state.filter((total) => total.id === 'TP');
	const str = state.filter((stat) => stat.id === 'STR');
	// console.log('mapStateToProps===>' ,state, total);

	const statSheet = [
		total,
		str
	];
	// console.log('statSheet', statSheet[0][0].val);
	return { statSheet: statSheet };
};

// const mapDispatchToProps = dispatch => ({
// 	adjustTotal: id => dispatch(adjustTotal)
// });

export default connect(mapStateToProps)(App);
