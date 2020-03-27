
var myQuestions = [
    {
        question: "Q1: While coronaviruses are named for the spikes that protrude from their surfaces, what do they resemble?",
        answers: {
            a: "a shark's teeth ",
            b: "barbed wire ",
            c: "football cleats ",
            d: "the sun's corona "
        },
        correctAnswer: 'd'
    },
    {
        question: "Q2: The coronavirus spreads easily from person to person, traveling through the air, enveloped in tiny _____?",
        answers: {
            a: "bacterial follicles ",
            b: "gamma rays ",
            c: "pollution particles ",
            d: "viral droplets "
        },
        correctAnswer: 'd'
    },
    {
        question: "Q3: Which of the following is NOT a common symptom of the coronavirus?",
        answers: {
            a: "dry cough ",
            b: "fever ",
            c: "rash ",
            d: "shortness of breath "

        },
        correctAnswer: 'c'
    },
    {
        question: "Q4: Most people fall ill 5 to 7 days after exposure, but symptoms may appear in as few as 2 days or as many as ______ days?",
        answers: {
          a: "14 ",
          b: "21 ",
          c: "28 ",
          d: "30 "
        },
        correctAnswer: 'a'
    },
    {
        question: "Q5: Coronavirus cases in children have been _________.",
        answers: {
          a: "non-existent ",
          b: "rare, as of now ",
          c: "as commonly as elderly cases ",
          d: "rapidly rising"
        },
        correctAnswer: 'b'
    },
    {
        question: "Q6: Washing your hands is considered to be one of the best defenses to prevent the spread of the virus. It is recommended that you wash your hands for at least _______.",
        answers: {
          a: "5 seconds ",
          b: "10 seconds ",
          c: "20 seconds ",
          d: "1 minute "
        },
        correctAnswer: 'c'
    },
    {
        question: "Q7: A vaccine for the coronavirus will take at least _________ to become available to the public.",
        answers: {
          a: "3 months ",
          b: "6 months ",
          c: "1 year ",
          d: "2 years "
        },
        correctAnswer: 'c'
    },
    {
        question: "Q8: By maintaing a distance of _________ from others when possible, people may limit the spread of the virus.",
        answers: {
          a: "12 inches ",
          b: "2 feet ",
          c: "4 feet ",
          d: "6 feet "
        },
        correctAnswer: 'd'
    },
    {
        question: "Q9: Which of the following countries have NOT gone on full lockdown due to the Coronavirus (as of 3/26/2020)?",
        answers: {
          a: "South Africa ",
          b: "South Korea ",
          c: "Argentina ",
          d: "New Zealand "
        },
        correctAnswer: 'b'
    },
    {
        question: "Q10: Can you catch the coronavirus disease from your pet, such as dogs and cats?",
        answers: {
          a: "Yes ",
          b: "No ",
          c: "Maybe ",
          d: "I don't know "
        },
        correctAnswer: 'b'
    },
    {
        question: "Q11: What are the best ways to prevent yourself from catching the COVID-19?",
        answers: {
          a: "Wash hands frequently using soap and water ",
          b: "Avoid close contact with anyone who has a cold or flu-like symptoms ",
          c: "Avoid touching your face ",
          d: "All of the above "
        },
        correctAnswer: 'd'
    },
    {
        question: "Q12: What percentage alcohol in hand rubs and disinfectants is needed to kill the coronavirus disease (COVID-19)?",
        answers: {
          a: "40% ",
          b: "50% ",
          c: "60% ",
          d: "80% "
        },
        correctAnswer: 'c'
    },
    {
        question: "Q13: Can warm weathers stop the spread of COVID-19?",
        answers: {
          a: "Yes ",
          b: "No ",
          c: "No, but it can slower down the spread ",
          d: "None of the above "
        },
        correctAnswer: 'c'
    },
    {
        question: "Q14: Can letters, products, and packages be contaminated by COVID-19?",
        answers: {
          a: "Yes ",
          b: "No ",
          c: "Maybe ",
          d: "I don't know "
        },
        correctAnswer: 'a'
    },
    {
        question: "Q15: Is drinking hot water effective at killing the COVID-19?",
        answers: {
          a: "True ",
          b: "False ",
          c: "Perhaps ",
          d: "I don't know "
        },
        correctAnswer: 'b'
    },
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++)
        {
            // reset the list of answers
            answers = [];
            // for each available answer...
            for(letter in questions[i].answers)
            {
                // ...add an html radio button
                answers.push('<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i = 0; i<questions.length; i++)
        {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // color-code right or wrong answers
            if(userAnswer===questions[i].correctAnswer)
            {
                numCorrect++;
                answerContainers[i].style.color = 'green';
            }
            else
            {
                answerContainers[i].style.color = 'red';
            }
        }


        if (numCorrect < 10)
        {
            alert(numCorrect + ' out of ' + questions.length + "\n" + "You should pay more attention to the COVID-19 ⚠️⚠️ ");
          }
          else
          {
            alert(numCorrect + ' out of ' + questions.length + "\n" + "Congratulations! You did great! 💪💪");
          }
          // show number of correct answers out of total
          resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

        }

    // show questions
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
