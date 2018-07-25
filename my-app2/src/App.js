import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
      term: '',
      items: [],
      clicks: 0,
      show: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
  }


  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: this.state.items.concat(this.state.term) //[...this.state.items, this.state.term]  this works the same as concat.  it is a spread attribute ...
    })
  }

  incrementItem = () => {
    this.setState({lcicks: this.state.clicks++ });
  }

  decreaseItem = () => {
    this.setState({clicks: this.state.clicks-1});
  }

  toggleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
          <MyComponent name="Scooby "/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
        <form className="App Form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
        <div>
          <button onClick={this.incrementItem}>+ 1</button>
          <button onClick={this.decreaseItem}>- 1</button>
          <button onClick={this.toggleClick}>{this.state.show ? 'Hide Number' : 'Show Number'} </button>
            <div>
            {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
            </div>
        </div>
      </div>
    );
  }
}





export default App;
