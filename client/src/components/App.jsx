import React from 'react';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div>App says hello</div>
    );
  }
}

export default App;