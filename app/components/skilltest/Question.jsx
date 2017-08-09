import React from 'react';
import { connect } from 'react-redux';
import {Map, List, fromJS} from 'immutable';
import {Row, Col} from 'react-bootstrap';
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.formAnwers = this.formAnwers.bind(this);
    }
    formAnwers() {
        return (<Row>
      <Col xs={12}>
      {this.props.data.get('answers', new List()).map((e, idx)=>
      <Row>
      <Col xs={12}>
      {`${idx + 1}. ${e.get('text')}`}
      </Col>
      </Row>
    )}
      </Col>
      </Row>);
    }
    render() {
        const data = this.props.data.get ? this.props.data : fromJS(this.props.data);
        return(
      <div>
      <Row>
      <Col xs={12}>
        {data.get('question')}
      </Col>
      </Row>
        {this.formAnwers()}
      </div>
    );
    }
}
Question.propTypes = {
    qIdx: React.PropTypes.number,
    data: React.PropTypes.object,
};
export default connect(
  (state, props)=>({
      data: state.getIn(['skilltest', 'questions', 'questions'], new List()).get(props.qIdx, new Map()),
      results: state.getIn(['skilltest', 'results']),
  }),
  ()=>({

  })
)(Question);
