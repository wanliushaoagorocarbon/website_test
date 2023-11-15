document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('mathTest').style.display = 'block';
    startTime = new Date();
    generateQuestions();
});

function generateQuestions() {
    const container = document.getElementById('questionsGrid');
    for (let i = 0; i < 50; i++) {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const operation = Math.random() > 0.5 ? '+' : '-';
        const question = document.createElement('div');
        question.innerHTML = `${num1} ${operation} ${num2} = <input type='number' />`;
        container.appendChild(question);
    }
}

document.getElementById('checkButton').addEventListener('click', function() {
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000;
    document.getElementById('timeResult').innerText = `Time spent: ${timeSpent} seconds`;
});

let startTime;
