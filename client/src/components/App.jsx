import React from 'react';
import axios from 'axios';
import ActionList from './ActionList';
import SummaryInfos from './SummaryInfos';
import Map from './Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios.get('/api/summaryInfos/28').then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <SummaryInfos infos={this.state.data} />
          <ActionList infos={this.state.data} />
        </div>
        <div className="mapbox">
          <Map info={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
