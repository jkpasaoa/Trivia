//create variables for questions and answer
let question;
let answer;
let category;

// define username with searchParams to get nameInput from url
// Make Hello <username> element to show on page --> It is visible on index.html

//create function for fetch
function getQuestion() {
    const answerContainer = document.querySelector('#answerContainer');
    answerContainer.textContent = '';

    const base_URL = "https://opentdb.com/api.php";
    const url = `${base_URL}?amount=1&difficulty=hard`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
                console.log(data)
                

             //change variables for question and answer after fetch
            //question from fetch
            question = data.results[0].question;
            question = question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&uuml;/g, 'ü').replace(/&eacute;/g, '"');
            console.log(question);
            
            //answer from fetch //let correctAnswer = data.results[0].correct_answer
            answer = data.results[0].correct_answer;
            console.log(answer)


            //category from fetch
            category = data.results[0].category;
            console.log(category)

            //shows category of the question immediately
            let categoryDiv = document.querySelector("#category")
            categoryDiv.textContent = `${category}`

            //grab from html where question is placed in the page, use div
            let questionDiv = document.querySelector("#question")
            questionDiv.textContent = `${question}`
            //hide the answer button
            const getAnswerButton = document.querySelector('#getAnswerButton');
            getAnswerButton.style.display ="block"

    // article.append(revealAnswerButton);
        })
}

    // action after clicking the question button
    const getQuestionButton = document.querySelector('#getQuestionButton');
    getQuestionButton.addEventListener("click", (event)=> {
    event.preventDefault(event);
    //console.log('getQuestion ran')
    getQuestion();

})

     //action after clicking the answer button
     const getAnswerButton = document.querySelector('#getAnswerButton');
     getAnswerButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(answer)
    
        const answerDiv = document.querySelector("#answerContainer")
        answerDiv.textContent = `${answer}`
    
});


//question loads immediately when user first arrives on page
question.onreadystatechange = getQuestion() 
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#question").style.visibility = "visible";
	} else {
		document.querySelector("#question").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	};

 
    // const resetButton = document.querySelector("section");
    // resetButton.addEventListener("click", (event) => {
    //     event.reset();
    // });