import React from 'react';
import { connect } from 'react-redux';

class Skilltest extends React.Component {
    render() {
        return(
      <div>Test!</div>
    );
    }
}
export default connect(
  ()=>({}),
  ()=>({})
)(Skilltest);
