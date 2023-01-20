//create variables for questions and answer
let question;
let answer;
let category;

// define username with searchParams to get nameInput from url
// Make Hello <username> element to show on page --> It is visible on index.html

//show category automatically on page

//create function for fetch
function getQuestion() {
    const base_URL = "https://opentdb.com/api.php";
    const url = `${base_URL}?amount=1&difficulty=hard`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
                console.log(data)
                //change variables for question and answer after fetch
            question = data.results[0].question;
            console.log(question);

            answer = data.results[0].correct_answer;
            console.log(answer)

            category = data.results[0].category;
            console.log(category)

            //shows category of the question
            let categoryDiv = document.querySelector("#category")
            categoryDiv.textContent = `${category}`

            // let correctAnswer = data.results[0].correct_answer
            //grab from html where question is placed in the page, use div
            let questionDiv = document.querySelector("#question")
            questionDiv.textContent = `${question}`
            //hide the answer button
            const getAnswerButton = document.querySelector('#getAnswerButton');
            getAnswerButton.style.display ="block"


    // article.append(revealAnswerButton);
        })
}

//action after clicking the question button
getQuestionButton.addEventListener("click", (event)=> {
    event.preventDefault(event);
    //console.log('getQuestion ran')
    getQuestion();

})
//action after clicking the answer button
getAnswerButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(answer)

    const answerDiv = document.querySelector("#answerContainer")
    answerDiv.textContent = `${answer}`

});

  