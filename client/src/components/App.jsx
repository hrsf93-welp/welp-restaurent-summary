import React from 'react';
import axios from 'axios';
import ActionList from './ActionList';
import SummaryInfo from './SummaryInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios.get('/api/summaryInfos/11').then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <SummaryInfo info={this.state.data} />
          <ActionList info={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
