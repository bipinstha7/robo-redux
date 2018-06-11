import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [], // map works on array
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(event.target.value);
    
  }

  render () {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return !this.state.robots.length ? <h1>Loading</h1>
    :
    (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;