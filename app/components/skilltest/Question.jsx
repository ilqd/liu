import React from 'react';
import { connect } from 'react-redux';
import {Map, List} from 'immutable';
import {Row, Col, Checkbox, Radio, FormControl} from 'react-bootstrap';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.formAnswers = this.formAnswers.bind(this);
        this.formAnswerSelectOne = this.formAnswerSelectOne.bind(this);
        this.formAnswerSelectMany = this.formAnswerSelectMany.bind(this);
        this.formAnswerText = this.formAnswerText.bind(this);
    }
    formAnswerSelectOne() {
        return this.props.data.get('answers', new List()).map((e, idx)=>
      <Row key={idx}>
      <Col xs={12}>
      <Radio name="radioGroup">
      {e.get('text')}
      </Radio>
      </Col>
      </Row>
    );
    }
    formAnswerSelectMany() {
        return this.props.data.get('answers', new List()).map((e, idx)=>
      <Row key={idx}>
      <Checkbox>
      {e.get('text')}
      </Checkbox>
      </Row>
    );
    }
    formAnswerText() {
        return (<Row>
      <Col xs={12} md={6}>
        <FormControl
          id="answerField"
          type="text"
          placeholder="Введите ответ"
        />
      </Col>
      </Row>);
    }
    formAnswers() {
        let answers = <div/>;
        switch (this.props.data.get('answerType')) {
            case 'selectOne':
                answers = this.formAnswerSelectOne();
                break;
            case 'selectMany':
                answers = this.formAnswerSelectMany();
                break;
            case 'text':
                answers = this.formAnswerText();
                break;
            default:
                break;
        }
        return answers;
    }
    render() {
        return(
      <div>
      <Row>
      <Col xs={12}>
        {this.props.data.get('question')}
      </Col>
      </Row>
        {this.formAnswers()}
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
