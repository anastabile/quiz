const questions = [
            { question: "QUAL TUBARÃO TEM A CABEÇA SEMELHANTE A UM MARTELO?", options: ["Tubarão Branco", "Tubarão Martelo", "Tubarão Tigre"], correct: 1},

            { question: "QUAL A PRINCIPAL CARACTERÍSTICA DO TUBARÃO TIGRE?", options: ["Sua cor", "Seu tamanho", "Suas listras"], correct:2},

            { question: "QUAL O MAIOR TUBARÃO DO MUNDO?", options: ["Tubarão Baleia", "Tubarão Anjo", "Tubarão Branco"], correct:0},

            { question: "QUAL O HABITAT NATURAL DOS TUBARÕES PONTAS NEGRAS DO RECIFE?", options: ["Recifes de corais", "Fundo do oceano", "Praias movimentadas"], correct:0},

            { question: "QUAL TUBARÃO É CONHECIDO POR SUA COR?", options: ["Tubarão Anjo", "Tubarão Martelo", "Tubarão Azul"], correct:2},

            { question: "QUAL TUBARÃO É CONHECIDO POR TER UM CORPO ACHATADO?", options: ["Tubarão Cinza", "Tubarão Anjo", "Tubarão Branco"], correct:1},

            { question: "QUAL TUBARÃO É SEMELHANTE COM O TUBARÃO PONSTAS NEGRAS?", options: ["Tubarão Pontas Brancas", "Tubarão Tigre", "Tubarão Azul"], correct:0},

            { question: "QUAL O HABITAT NATURAL DO TUBARÃO PONTAS NEGRAS DO OCEANO?", options: ["Mangue", "Fundo do oceano", "Junto de cardumes"], correct:1},

            { question: "QUAL TUBARÃO REMETE UMA ARMA BRANCA?", options: ["Tubarão Baleia", "Tubarão Pontas Brancas", "Tubarão Rabo de Espada"], correct:2},

            { question: "QUAL TUBARÃO QUE, APESAR DE UMA BOCA ENORME, SÓ SE ALIMENTA DE PLÂNCTONS?", options: ["Tubarão Baleia", "Tubarão Martelo", "Tubarão Cinza"], correct:0},

            
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