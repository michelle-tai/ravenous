import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
    searchYelp(term, location, sortBy){
        console.log("Searching Yelp with Pizza, Brooklyn, best_match");
    }
    render(){
        return (
            <div class="App">
              <h1>ravenous</h1>
              <SearchBar searchYelp={this.searchYelp}/>
              <BusinessList businesses={businesses}/>
            </div>
          );
    }
}

export default App;
