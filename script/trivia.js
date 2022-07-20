let myQuestions;
    myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: [
                { a: "Douglas Crockford" },
                { b: "Sheryl Sandberg" },
                { c: "Brendan Eich" }
            ],
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
                // key : value
            },
            correctAnswer: "d"
        }];

const {answers} = myQuestions[0];
const {answers: { a },} = myQuestions[0];
const {answers: { b },} = myQuestions[0];
const {answers: { c },} = myQuestions[0];
console.log(`answer1:${a},answer2:${b},answer3:${c}`)

