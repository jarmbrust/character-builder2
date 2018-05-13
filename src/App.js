import React, { Component } from 'react';
import AbilityList from './components/AbilityList';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Builder v0.02</h1>
        </header>
        <div>
					<AbilityList
						ability={this.props.statSheet}
					/>
					<p>test: { console.log(this.props.statSheet)}{ this.props.statSheet[0][0].val}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

	// this is ugly, will need to refactor
	const total = state.filter((total) => total.id === 'TP');
	const str = state.filter((stat) => stat.id === 'STR');
	const dex = state.filter((stat) => stat.id === 'DEX');
	const con = state.filter((stat) => stat.id === 'CON');
	const int = state.filter((stat) => stat.id === 'INT');
	const wis = state.filter((stat) => stat.id === 'WIS');
	const chr = state.filter((stat) => stat.id === 'CHR');

	const statSheet = [
		total,
		str,
		dex,
		con,
		int,
		wis,
		chr
	];

	return { statSheet: statSheet };
};

export default connect(mapStateToProps)(App);
