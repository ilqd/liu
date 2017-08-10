/* eslint new-cap: ["error", { "capIsNew": false }]*/
import { Map } from 'immutable';

export const skilltestResultsReducer = (state = Map(), action) => {
    switch (action.type) {
        case 'ANSWER_GIVEN':
            return state.set(action.questionId, action.answer);
        case 'CLEAR_ANSWERS':
            return Map();
        default:
            return state;
    }
};
export const answerGiven = (dispatch, questionId, answer) =>
dispatch({ type: 'ANSWER_GIVEN', questionId, answer });
