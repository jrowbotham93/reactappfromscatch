/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor(){
      super()
      this.state = { 
        clicker: "welcome" 
      }
    }
    
    clickFunc () {
      this.setState(({ clicker }) => ({
          clicker: clicker + "welcome"
        })
      );
    };

    render () {
      return (
        <>
          <h1 onClick={e => this.clickFunc(e)}>Welcome</h1>
          {this.state.clicker}
        </>
      );
    }
  }

ReactDOM.render(<Welcome />, document.getElementById('root'));
