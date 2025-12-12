        // Base de datos de preguntas
        const questions = [
            {
                id: 1,
                block: 1,
                difficulty: 'low',
                text: "¿Qué significa las siglas DNS?",
                options: [
                    "Domain Network System",
                    "Domain Name System",
                    "Data Network Service",
                    "Digital Name Server"
                ],
                correct: 1,
                explanation: "DNS significa Domain Name System. Es el sistema que traduce nombres de dominio a direcciones IP."
            },
            {
                id: 2,
                block: 1,
                difficulty: 'low',
                text: "¿Cuál es el puerto estándar para el protocolo SSH?",
                options: ["21", "22", "23", "25"],
                correct: 1,
                explanation: "El puerto 22 está reservado para SSH (Secure Shell), usado para conexiones seguras a servidores."
            },
            {
                id: 3,
                block: 1,
                difficulty: 'low',
                text: "¿Qué protocolo se utiliza para transferir archivos de forma no segura (texto plano)?",
                options: ["SFTP", "SSH", "FTP", "HTTPS"],
                correct: 2,
                explanation: "FTP (File Transfer Protocol) transfiere archivos sin encriptación, a diferencia de SFTP que es seguro."
            },
            {
                id: 4,
                block: 1,
                difficulty: 'low',
                text: "¿Qué capa del modelo OSI se encarga del direccionamiento lógico (IP)?",
                options: [
                    "Capa 1 (Física)",
                    "Capa 2 (Enlace)",
                    "Capa 3 (Red)",
                    "Capa 4 (Transporte)"
                ],
                correct: 2,
                explanation: "La capa 3 (Red) maneja el direccionamiento lógico y el enrutamiento de paquetes."
            },
            {
                id: 5,
                block: 1,
                difficulty: 'low',
                text: "¿Qué registro DNS asocia un nombre de dominio a una dirección IPv4?",
                options: ["AAAA", "CNAME", "MX", "A"],
                correct: 3,
                explanation: "El registro A (Address) mapea un nombre de dominio a una dirección IPv4. AAAA es para IPv6."
            },
            // Añadir más preguntas aquí siguiendo el mismo formato...
            {
                id: 21,
                block: 2,
                difficulty: 'low',
                text: "¿Qué comando lista los archivos de un directorio?",
                options: ["cd", "ls", "mkdir", "touch"],
                correct: 1,
                explanation: "El comando 'ls' (list) muestra los archivos y directorios en el directorio actual."
            },
            {
                id: 41,
                block: 3,
                difficulty: 'low',
                text: "¿Cuál es el nombre del servicio de Apache en Ubuntu?",
                options: ["httpd", "apache", "apache2", "webserver"],
                correct: 2,
                explanation: "En Ubuntu/Debian, Apache se instala como el servicio 'apache2'."
            },
            {
                id: 61,
                block: 4,
                difficulty: 'low',
                text: "¿Cuál es el puerto por defecto de MySQL/MariaDB?",
                options: ["8080", "1433", "3306", "5432"],
                correct: 2,
                explanation: "MySQL y MariaDB usan el puerto 3306 por defecto para conexiones."
            },
            {
                id: 81,
                block: 5,
                difficulty: 'low',
                text: "¿Qué servicio de AWS ofrece servidores virtuales?",
                options: ["S3", "RDS", "EC2", "Lambda"],
                correct: 2,
                explanation: "EC2 (Elastic Compute Cloud) es el servicio de instancias virtuales de AWS."
            }
        ];

        // Variables globales
        let currentQuestion = 0;
        let userAnswers = new Array(questions.length).fill(null);
        let score = 0;
        let startTime = null;
        let timerInterval = null;
        let filteredQuestions = [...questions];

        // Inicializar
        document.addEventListener('DOMContentLoaded', () => {
            loadQuestion(0);
            updateStats();
        });

        // Cargar pregunta
        function loadQuestion(index) {
            if (index < 0 || index >= filteredQuestions.length) return;
            
            currentQuestion = index;
            const q = filteredQuestions[index];
            
            // Actualizar interfaz
            document.getElementById('question-num').textContent = q.id;
            document.getElementById('question-text').textContent = q.text;
            
            // Actualizar badge de dificultad
            const badge = document.getElementById('difficulty-badge');
            badge.textContent = getDifficultyEmoji(q.difficulty) + ' ' + q.difficulty.toUpperCase();
            badge.className = `difficulty difficulty-${q.difficulty}`;
            
            // Cargar opciones
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((option, i) => {
                const div = document.createElement('div');
                div.className = 'option';
                if (userAnswers[q.id - 1] === i) {
                    div.classList.add('selected');
                }
                div.innerHTML = `
                    <span class="option-letter">${letters[i]}</span>
                    ${option}
                `;
                div.onclick = () => selectOption(i);
                optionsContainer.appendChild(div);
            });
            
            // Actualizar progreso
            updateProgress();
            updateStats();
            
            // Ocultar feedback
            document.getElementById('feedback').classList.remove('show');
        }

        // Seleccionar opción
        function selectOption(optionIndex) {
            const q = filteredQuestions[currentQuestion];
            userAnswers[q.id - 1] = optionIndex;
            
            // Remover selección anterior
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Marcar selección actual
            document.querySelectorAll('.option')[optionIndex].classList.add('selected');
            
            // Mostrar feedback inmediato
            showFeedback(optionIndex === q.correct);
            
            // Actualizar puntuación
            updateScore();
        }

        // Mostrar feedback
        function showFeedback(isCorrect) {
            const q = filteredQuestions[currentQuestion];
            const feedback = document.getElementById('feedback');
            
            feedback.className = `feedback show ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
            feedback.innerHTML = `
                <strong>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong>
                <div class="explanation">${q.explanation}</div>
            `;
            
            // Resaltar opción correcta
            document.querySelectorAll('.option').forEach((opt, i) => {
                if (i === q.correct) {
                    opt.classList.add('correct');
                } else if (i === userAnswers[q.id - 1] && i !== q.correct) {
                    opt.classList.add('incorrect');
                }
            });
        }

        // Navegación
        function nextQuestion() {
            if (currentQuestion < filteredQuestions.length - 1) {
                loadQuestion(currentQuestion + 1);
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                loadQuestion(currentQuestion - 1);
            }
        }

        // Iniciar examen
        function startExam() {
            if (!startTime) {
                startTime = new Date();
                timerInterval = setInterval(updateTimer, 1000);
                alert('⏱️ ¡Examen iniciado! El temporizador está corriendo.');
            }
        }

        // Reiniciar examen
        function resetExam() {
            if (confirm('¿Estás seguro de reiniciar el examen? Perderás todo el progreso.')) {
                userAnswers.fill(null);
                score = 0;
                startTime = null;
                clearInterval(timerInterval);
                document.getElementById('timer').textContent = '00:00';
                filteredQuestions = [...questions];
                loadQuestion(0);
                updateStats();
                closeResults();
            }
        }

        // Actualizar temporizador
        function updateTimer() {
            if (!startTime) return;
            
            const now = new Date();
            const diff = Math.floor((now - startTime) / 1000);
            const minutes = Math.floor(diff / 60);
            const seconds = diff % 60;
            
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Actualizar puntuación
        function updateScore() {
            score = 0;
            let correctCount = 0;
            
            questions.forEach((q, i) => {
                if (userAnswers[i] === q.correct) {
                    score++;
                    correctCount++;
                }
            });
            
            document.getElementById('score').textContent = score;
            document.getElementById('correct-count').textContent = correctCount;
        }

        // Actualizar estadísticas
        function updateStats() {
            document.getElementById('current-question').textContent = currentQuestion + 1;
            updateScore();
        }

        // Actualizar barra de progreso
        function updateProgress() {
            const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
            document.getElementById('progress-fill').style.width = `${progress}%`;
        }

        // Filtrar por bloque
        function filterByBlock() {
            const block = document.getElementById('block-select').value;
            
            if (block === 'all') {
                filteredQuestions = [...questions];
            } else {
                filteredQuestions = questions.filter(q => q.block === parseInt(block));
            }
            
            loadQuestion(0);
        }

        // Mostrar resultados
        function showResults() {
            updateScore();
            
            const total = questions.length;
            const correct = score;
            const percentage = Math.round((correct / total) * 100);
            
            // Calcular por nivel
            const lowQuestions = questions.filter(q => q.difficulty === 'low');
            const mediumQuestions = questions.filter(q => q.difficulty === 'medium');
            const highQuestions = questions.filter(q => q.difficulty === 'high');
            
            let lowCorrect = 0, mediumCorrect = 0, highCorrect = 0;
            
            questions.forEach((q, i) => {
                if (userAnswers[i] === q.correct) {
                    if (q.difficulty === 'low') lowCorrect++;
                    else if (q.difficulty === 'medium') mediumCorrect++;
                    else if (q.difficulty === 'high') highCorrect++;
                }
            });
            
            // Actualizar modal
            document.getElementById('final-score').textContent = `${percentage}%`;
            document.getElementById('total-score').textContent = `${score}/100`;
            document.getElementById('total-correct').textContent = `${correct}/${total}`;
            document.getElementById('total-time').textContent = document.getElementById('timer').textContent;
            document.getElementById('low-stats').textContent = `${lowCorrect}/${lowQuestions.length}`;
            document.getElementById('medium-stats').textContent = `${mediumCorrect}/${mediumQuestions.length}`;
            document.getElementById('high-stats').textContent = `${highCorrect}/${highQuestions.length}`;
            document.getElementById('accuracy').textContent = `${percentage}%`;
            
            // Título según resultado
            const title = document.getElementById('result-title');
            if (percentage >= 80) title.textContent = "🎉 ¡Excelente trabajo!";
            else if (percentage >= 60) title.textContent = "👍 ¡Buen trabajo!";
            else title.textContent = "📚 Sigue practicando";
            
            // Mostrar modal
            document.getElementById('results-modal').classList.add('show');
        }

        // Cerrar resultados
        function closeResults() {
            document.getElementById('results-modal').classList.remove('show');
        }

        // Mostrar soluciones
        function showAnswers() {
            let solutions = "🔑 SOLUCIONES DEL EXAMEN\n\n";
            
            questions.forEach((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct;
                const answerLetter = String.fromCharCode(65 + q.correct); // A, B, C, D
                
                solutions += `Pregunta ${index + 1}: ${q.text}\n`;
                solutions += `Respuesta correcta: ${answerLetter}) ${q.options[q.correct]}\n`;
                solutions += `Tu respuesta: ${userAnswer !== null ? 
                    String.fromCharCode(65 + userAnswer) + ') ' + q.options[userAnswer] : 
                    'No respondida'}\n`;
                solutions += `Estado: ${isCorrect ? '✅ CORRECTO' : '❌ INCORRECTO'}\n`;
                solutions += `Explicación: ${q.explanation}\n`;
                solutions += "─".repeat(50) + "\n\n";
            });
            
            // Crear ventana con soluciones
            const solutionsWindow = window.open('', '_blank');
            solutionsWindow.document.write(`
                <html>
                <head>
                    <title>Soluciones del Examen</title>
                    <style>
                        body { font-family: monospace; padding: 20px; }
                        .correct { color: green; }
                        .incorrect { color: red; }
                    </style>
                </head>
                <body>
                    <pre>${solutions}</pre>
                </body>
                </html>
            `);
        }

        // Helper: obtener emoji de dificultad
        function getDifficultyEmoji(difficulty) {
            switch(difficulty) {
                case 'low': return '🟢';
                case 'medium': return '🟡';
                case 'high': return '🔴';
                default: return '⚪';
            }
        }

        // Añadir más preguntas automáticamente
        function addMoreQuestions() {
            // Para el ejemplo, solo tenemos 10 preguntas
            // En un caso real, aquí cargaríamos las 100 preguntas
            console.log("Se pueden añadir más preguntas siguiendo el formato establecido");
        }