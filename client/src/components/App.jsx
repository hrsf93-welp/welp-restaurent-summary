import React from 'react';
import axios from 'axios';
import ActionList from './ActionList';
import SummaryInfos from './SummaryInfos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios.get('/test').then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }
  render() {
    return (
      <div id="header">
        <SummaryInfos infos={this.state.data} />
        <ActionList infos={this.state.data} />
      </div>
    );
  }
}

export default App;
