import React from 'react';
import ActionList from './ActionList';
import SummaryInfos from './SummaryInfos';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData: { id: 18, name: 'Mike\'s' },
    };
  }

  render() {
    return (
      <div id="header">
        <SummaryInfos />
        <ActionList />
      </div>
    );
  }
}

export default App;
