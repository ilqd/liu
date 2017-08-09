import React from 'react';
import { connect } from 'react-redux';
import {loadData} from '@/store/skilltestQuestions.store';
import {data} from './DataStub.js';
import Question from './Question';
import {Row, Col, Button} from 'react-bootstrap';
import {List} from 'immutable';
class Skilltest extends React.Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.getQuestionsCount = this.getQuestionsCount.bind(this);
        this.state = {questionIdx: 0};
    }
    componentWillMount() {
        this.props.loadData(data);
    }
    back() {
        this.setState({questionIdx: this.state.questionIdx - 1});
    }
    next() {
        this.setState({questionIdx: this.state.questionIdx + 1});
    }
    getQuestionsCount() {
        if (this.props.data && this.props.data.size > 0) {
            return this.props.data.get('questions', new List()).size;
        }
        return 0;
    }
    render() {
        return(
      !this.props.data || this.props.data.size === 0 ? <div/> :
      <div>
        <Row>
          <Col xs={12}>
              <h2>
              {this.props.data.get('testName')}
              </h2>
            </Col>
          </Row>
          <Question qIdx={this.state.questionIdx}/>
          <Row>
            <Col xs={6}>
              {this.state.questionIdx == 0 ? '' :
              <Button onClick={this.back} style={{float: 'right'}}>
              Назад
              </Button>
              }
            </Col>
          <Row>
            <Col xs={6}>
            {this.state.questionIdx >= this.getQuestionsCount() - 1 ? '' :
              <Button onClick={this.next} style={{float: 'left'}}>
              Вперёд
              </Button>
              }
            </Col>
          </Row>
        </Row>
      </div>
    );
    }
}
Skilltest.propTypes = {
    loadData: React.PropTypes.func,
    data: React.PropTypes.object,
};
export default connect(
  (state)=>({
      data: state.getIn(['skilltest', 'questions']),
  }),
  (dispatch)=>({
      loadData(dataPassed) {
          loadData(dispatch, dataPassed);
      }
  })
)(Skilltest);
