  const questions = [
            { question: "QUANTAS ESPÉCIES RECONHECIDAS DE TUBARÕES EXISTEM NO BRASIL?", options: ["56", "105", "80"], correct: 2},

            { question: "O QUE CARACTERIZA OS TUBARÕES MAIS RÁPIDOS DOS OCEANOS?", options: ["Estrutura do corpo", "Nadar em águas rasas", "Comer peixes pequenos"], correct: 0},

            { question: "QUAL O HABITAT PREFERIDO DO TUBARÃO ANJO?", options: ["Alto-mar", "Terrenos arenosos", "Recifes de corais"], correct: 1},

            { question: "QUAL É O PRINCIPAL PREDADOR DE TUBARÕES ADULTOS?", options: ["Outros tubarões", "Polvos gigantes", "Orcas"], correct: 2},

            { question: "EM QUAL REGIÃO DO BRASIL O TUBARÃO BRANCO É MAIS VISTO?", options: ["Nordeste", "Sul", "Sudeste"], correct:1},

            { question: "QUAL A COMPOSIÇÃO DOS ESQUELETOS DOS TUBARÕES?", options: ["Queratina", "Cartilagem", "Quitina"], correct: 1},

            { question: "QUAL O PRINCIPAL SENTIDO UTILIZADO PELOS TBARÕES PARA LOCALIZAR PRESAS EM LONGAS DISTÂNCIAS", options: ["Olfato", "Visão", "Ecolocalização"], correct: 0},

            { question: "QUAL CARACTERÍSTICA DO TUBARÃO TIGRE O TORNA UM ÓTIMO PREDADOR?", options: ["Nadar em águas profundas", "Dieta altamente variada", "Comportamento solitário"], correct: 1},

            { question: "EM MÉDIA, QUANTOS DENTES O TUBARÃO BRANCO TEM?", options: ["3.000", "1.100", "310"], correct: 0},   

              { question: "QUAL A FUNÇÃO DAS AMPOLAS DE LORENZINI, PRESENTE NO CORPO DOS TUBARÕES?", options: ["Auxiliar na respiração", "Detectar campos elétricos", "Regular temperatura corporal"], correct: 1},   
        ];

        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            const questionData = questions[currentQuestion];
            document.getElementById('question-text').innerText = questionData.question;
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = "";
            questionData.options.forEach((option, index) => {
                const div = document.createElement('div');
                div.classList.add('option');
                div.innerText = option;
                div.onclick = () => checkAnswer(index);
                optionsContainer.appendChild(div);
            });
        }

        function checkAnswer(selectedIndex) {
            const questionData = questions[currentQuestion];
            const optionsContainer = document.getElementById('options');
            optionsContainer.childNodes.forEach((optionDiv, index) => {
                optionDiv.classList.add(index === questionData.correct ? "correct" : "incorrect");
            });

            if (selectedIndex === questionData.correct) {
                score++;
                document.getElementById('score').innerText = `Acertos: ${score}`;
            }

            document.getElementById('next-button').style.display = "block";
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
                document.getElementById('next-button').style.display = "none";
            } else {
                document.getElementById('quiz-container').innerHTML = `<h2>Quiz Finalizado!</h2><p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
            }
        }

        loadQuestion();