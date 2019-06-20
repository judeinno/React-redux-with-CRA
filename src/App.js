import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from  './components/post';
import PostForm from  './components/postForm';
import StarComponent from  './components/starRating';
import store from './store'
import { Provider } from 'react-redux'; 


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <PostForm />
            <hr/>
            <StarComponent />
            <hr/>
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
