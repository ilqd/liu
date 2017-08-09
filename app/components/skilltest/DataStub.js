export const data = {
    testName: 'Level defining test',
    version: '1',
    questions: [
        {
            id: 1,
            question: 'How much ... the fish?',
            answerType: 'selectOne',
            answers: [{
                id: 1,
                text: 'is',
                correct: true
            }, {
                id: 2,
                text: 'are',
                correct: false
            }
    ]},
        {
            id: 2,
            question: 'It a good day to ...',
            answerType: 'selectMany',
            answers: [{
                id: 1,
                text: 'die',
                correct: false
            }, {
                id: 2,
                text: 'cry',
                correct: false
            }, {
                id: 3,
                text: 'pie',
                correct: true
            }, {
                id: 4,
                text: 'lie',
                correct: true
            }
    ]},
        {
            id: 3,
            question: 'Как зовут учителя?',
            answerType: 'text',
            correctAnswers: ['Люба', 'Любовь', 'Любашка']
        }
    ]
};
