import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  // its like try catch block. Anything error happens componentDidCatch runs
  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasErrror) {
      return <h1>Ooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
