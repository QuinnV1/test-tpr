const questions = [
    {
        question: "Какой класс математических моделей является наиболее распространенным? <br/>",
        answers: [
            { text: "линейное программирование", correct: true },
            { text: "нелинейное программирование", correct: false },
            { text: "регрессионный анализ", correct: false },
            { text: "марковские задачи", correct: false }
        ]
    },

    {
        question: "Симплекс-метод используется для решения задач <br/>",
        answers: [
            { text: "линейное программирование", correct: true },
            { text: "нелинейное программирование", correct: false },
            { text: "цепей Маркова", correct: false },
            { text: "теория игр", correct: false }
        ]
    },

    {
        question: "Метод С-З угла используется <br/>",
        answers: [
            { text: "линейное программирование", correct: false },
            { text: "нелинейное программирование", correct: false },
            { text: "транспортных моделях", correct: true },
            { text: "теория игр", correct: false }
        ]
    },

    {
        question: "В практике принятия решений различают <br/>",
        answers: [
            { text: "корректные решения", correct: false },
            { text: "допустимые решения", correct: true },
            { text: "оптимальные решения", correct: true },
            { text: "многозначенные решения", correct: false }
        ]
    },

    {
        question: "Решение ТЗ по критерию времени <br/>",
        answers: [
            { text: "T=∑tx -> min", correct: false },
            { text: "T= min tx -> max", correct: false },
            { text: "T= max tx -> min", correct: true },
            { text: "T=∑tx -> max", correct: false }
        ]
    },

    {
        question: "Альтернативы в ТПР характеризуются <br/>",
        answers: [
            { text: "сведениями", correct: false },
            { text: "признаками", correct: false },
            { text: "критериями", correct: true },
            { text: "факторами", correct: false }
        ]
    },

    {
        question: "Методы решения транспотных задач <br/>",
        answers: [
            { text: "штрафы функций", correct: true },
            { text: "минимально стоимости", correct: true },
            { text: "циклических перестановок", correct: true },
            { text: "методом Дейкстры", correct: false }
        ]
    },

    {
        question: "Имеются три работника и три вида работ. Стоимость назначения представлены в таблице. Какова минимальная стоимость работ?<br><br>" +
                  "<table border='1' style='border-collapse: collapse; margin: 10px 0;'>" +
                  "<tr><th></th><th>Работа 1</th><th>Работа 2</th><th>Работа 3</th></tr>" +
                  "<tr><td>Работник 1</td><td>10</td><td>8</td><td>12</td></tr>" +
                  "<tr><td>Работник 2</td><td>6</td><td>4</td><td>7</td></tr>" +
                  "<tr><td>Работник 3</td><td>8</td><td>5</td><td>2</td></tr>" +
                  "</table> <br/>",
        answers: [
            { text: "12", correct: false },
            { text: "20", correct: false },
            { text: "8", correct: false },
            { text: "16", correct: true }
        ]
    },

    {
        question:
                  "С трех элеваторов A1, A2, A3 перевозится зерно на три мельницы B1, B2, B3. Количество зерна и стоимость перевозок указаны в таблице. Укажите стоимость оптимального плана перевозок (методом наименьшей стоимости).<br><br>" +
                  "<table border='1' style='border-collapse: collapse; margin: 10px 0; text-align: center;'>" +
                  "<tr><th></th><th>B1</th><th>B2</th><th>B3</th><th>a<sub>i</sub></th></tr>" +
                  "<tr><td>A1</td><td>9</td><td>7</td><td>5</td><td>40</td></tr>" +
                  "<tr><td>A2</td><td>3</td><td>6</td><td>8</td><td>60</td></tr>" +
                  "<tr><td>A3</td><td>7</td><td>3</td><td>4</td><td>20</td></tr>" +
                  "<tr><td>b<sub>j</sub></td><td>50</td><td>40</td><td>30</td><td></td></tr>" +
                  "</table> <br/>",
        answers: [
            { text: "480", correct: false },
            { text: "490", correct: false },
            { text: "510", correct: true },
            { text: "420", correct: false }
        ]
    },

    {
        question: "Как можеть быть наиболее просто решена задача линейного программирования в случае двух переменных <br/>",
        answers: [
            { text: "матричным методом", correct: false },
            { text: "генетическим алгоритмом", correct: false },
            { text: "графическим методом", correct: true },
            { text: "метод перебора", correct: false }
        ]
    },

    {
        question: "Какой метод ТЗ является опорным <br/>",
        answers: [
            { text: "потенциалов", correct: false },
            { text: "венгерский", correct: false },
            { text: "штрафных функций", correct: false },
            { text: "С-З угол", correct: true }
        ]
    },

    {
        question: "Назначение транспортных задач <br/>",
        answers: [
            { text: "определение максимального объема перевозок из пунктов отправления", correct: false },
            { text: "определение объемов перевозок из пунктов отправления в пункты назначения с минимальной суммарной стоимостью перевозок", correct: true },
            { text: "определение объемов перевозок из пунктов назначения в пункты отправления с минимальной суммарной стоимостью перевозок", correct: false },
            { text: "определение необходимого числа транспортных средств для организации перевозок", correct: false }
        ]
    },

    {
        question: "Какой план перевозок ТЗ является оптимальным <br/>",
        answers: [
            { text: "минимаксныйй", correct: false },
            { text: "потенциальный", correct: true },
            { text: "наименьшей стоимости", correct: false },
            { text: "штрафных функцийй", correct: false }
        ]
    },

    {
        question: "Задача о назначениях может быть решена методом <br/>",
        answers: [
            { text: "Венгерским", correct: true },
            { text: "Разумовского", correct: false },
            { text: "Турецким", correct: false },
            { text: "Бойса-Кодда", correct: false }
        ]
    },

    {
        question: "Как поступают, если сумма запасов в пунктах отправления при Т3 превышает сумму поданных заявок <br/>",
        answers: [
            { text: "вводят фиктивный пункт отправления", correct: false },
            { text: "отправляют невостребованные товары на склад", correct: false },
            { text: "вводят фиктивный пункт назначения", correct: true },
            { text: "удаляют заявку", correct: false }
        ]
    },

    {
        question: "Для решения транспортной задачи используются методы <br/>",
        answers: [
            { text: "нелинейного программирования", correct: false },
            { text: "минимаксный метод Вальда", correct: false },
            { text: "максимизации", correct: false },
            { text: "штрафы функций", correct: true },
            { text: "наименьшей стоимости", correct: true }
        ]
    },

    {
        question: "В ТПР варианты выбора решений называются <br/>",
        answers: [
            { text: "ситуации", correct: false },
            { text: "факторы", correct: false },
            { text: "альтернативы", correct: true },
            { text: "критерии", correct: false }
        ]
    },

    {
        question: "ТПР представляет собой совокупность методов, ориентированных на нахождение <br/>",
        answers: [
            { text: "нулевых решений", correct: false },
            { text: "минимальных решений", correct: false },
            { text: "наилучших решений", correct: true },
            { text: "максимальных решений", correct: false }
        ]
    },

    {
        question: "Математические методы принятия решений бывают <br/>",
        answers: [
            { text: "многокритериальные", correct: false },
            { text: "линейные", correct: true },
            { text: "корреляционные", correct: false },
            { text: "дискретные", correct: false },
            { text: "непрерывные", correct: false }
        ]
    },

    {
        question: "Общая математическая модель формирования оптимальных решений: <br/><br/>" +
                  "1) \ z = f(c, x -> extr \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\g(x) <= b \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ x >= 0 \<br><br>" +
                  "2) \ z = f(c, x -> extr \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ g(a, x) <= b \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ x <= 0 \<br><br>" +
                  "3) \ z = f(c, x) -> extr \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ g(a, b) <= x \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ a, b >= 0 \<br><br>" +
                  "4) \ z = f(c, x) -> extr \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ g(a, x) <= b \<br>" +
                  "&nbsp;&nbsp;&nbsp;&nbsp;\ x >= 0 \ <br/><br/>",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }
        ]
    },

    {
        question: "Какой класс математических моделей является наиболее распространненым <br/><br/>",
        answers: [
            { text: "марковский процесс", correct: false },
            { text: "нечеткие множества", correct: false },
            { text: "линейного программирования", correct: true },
            { text: "нелинейного программирования", correct: false },
        ]
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateQuiz() {
    const questionsContainer = document.getElementById('questionsContainer');
    shuffleArray(questions);

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('div');
        questionLabel.innerHTML = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionLabel);

        const answersDiv = document.createElement('div');
        answersDiv.classList.add('answers');

        question.answers.forEach(answer => {
            const answerLabel = document.createElement('label');
            const answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = `question${index}`;
            answerInput.value = answer.text;

            answerLabel.appendChild(answerInput);
            answerLabel.appendChild(document.createTextNode(answer.text));
            answersDiv.appendChild(answerLabel);
        });

        questionDiv.appendChild(answersDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function showResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const scoreElement = document.getElementById('score');
    const answersSummary = document.getElementById('answersSummary');

    let correctAnswers = 0;
    const totalQuestions = questions.length;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const questionDiv = document.createElement('div');

        if (selectedAnswer) {
            const isCorrect = question.answers.find(answer => answer.text === selectedAnswer.value && answer.correct);
            if (isCorrect) {
                correctAnswers++;
                questionDiv.classList.add('correct');
                questionDiv.textContent = `${index + 1}. Правильно: ${selectedAnswer.value}`;
            } else {
                questionDiv.classList.add('incorrect');
                questionDiv.textContent = `${index + 1}. Неправильно: ${selectedAnswer.value} (Правильный ответ: ${question.answers.find(answer => answer.correct).text})`;
            }
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.textContent = `${index + 1}. Не отвечено (Правильный ответ: ${question.answers.find(answer => answer.correct).text})`;
        }

        answersSummary.appendChild(questionDiv);
    });

    scoreElement.textContent = `Вы ответили правильно на ${correctAnswers} из ${totalQuestions} вопросов.`;
    resultsContainer.classList.remove('hidden');
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showResults();
});

generateQuiz();