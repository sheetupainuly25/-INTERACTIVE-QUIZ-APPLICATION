const questions = [
  // Computer Graphics
  {
    question: "Which algorithm is used for line drawing in Computer Graphics?",
    choices: ["Dijkstra's Algorithm", "Bresenham's Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm"],
    correctAnswer: "Bresenham's Algorithm"
  },
  {
    question: "What is the full form of GUI?",
    choices: ["Graphical User Interface", "General User Interface", "Graphical Unified Input", "General Unified Interface"],
    correctAnswer: "Graphical User Interface"
  },

  // Operating Systems (OS)
  {
    question: "Which scheduling algorithm gives minimum average waiting time?",
    choices: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    correctAnswer: "SJF"
  },
  {
    question: "Which of the following is NOT an operating system?",
    choices: ["Windows", "Linux", "Oracle", "MacOS"],
    correctAnswer: "Oracle"
  },

  // Computer Networks
  {
    question: "What does HTTP stand for?",
    choices: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "High Transmission Text Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  },
  {
    question: "Which device is used to connect different networks together?",
    choices: ["Hub", "Switch", "Router", "Repeater"],
    correctAnswer: "Router"
  },

  // Java Programming
  {
    question: "Which keyword is used to inherit a class in Java?",
    choices: ["implement", "inherit", "extends", "super"],
    correctAnswer: "extends"
  },
  {
    question: "Which of these is NOT a Java feature?",
    choices: ["Object-Oriented", "Platform Dependent", "Secure", "Robust"],
    correctAnswer: "Platform Dependent"
  },

  // Database Management Systems (DBMS)
  {
    question: "Which language is used to query data from a database?",
    choices: ["HTML", "SQL", "XML", "CSS"],
    correctAnswer: "SQL"
  },
  {
    question: "In a relational database, a table is also known as a:",
    choices: ["Tuple", "Relation", "Attribute", "Entity"],
    correctAnswer: "Relation"
  },

  // C Programming
  {
    question: "Which of the following is a correct syntax to declare an integer variable in C?",
    choices: ["int num;", "integer num;", "num int;", "int = num;"],
    correctAnswer: "int num;"
  },
  {
    question: "Which symbol is used to comment a single line in C?",
    choices: ["//", "/*", "<!--", "#"],
    correctAnswer: "//"
  },

  // Data Structures
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    choices: ["Stack", "Queue", "Array", "Tree"],
    correctAnswer: "Queue"
  },
  {
    question: "In a binary tree, each node has at most how many children?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2"
  }
];

let currentIndex = 0;
let score = 0;

// Get HTML elements
const ques = document.getElementById("question");
const choice = document.getElementById("choices");
const feed = document.getElementById("feedback");
const score1 = document.getElementById("score");
const next = document.getElementById("next");
const quiz = document.getElementById("quiz");

// Function to load a question
function loadQue() {
  choice.innerHTML = ""; // Clear previous choices
  feed.textContent = ""; // Clear previous feedback
  score1.textContent = ""; // Clear previous score
  
  let curr = questions[currentIndex];
  console.log("Current question:", curr.question);
  ques.textContent = curr.question;

  curr.choices.forEach((opt) => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.classList.add("choice-btn");
    button.addEventListener("click", () => checkAnswer(opt));
    choice.appendChild(button);
  });


}

// Load the first question
loadQue();

// Function to check the answer and provide feedback
function checkAnswer(selectedChoice) {
  let curr = questions[currentIndex];

  // Disable all buttons once an option is selected
  const allbtn = document.querySelectorAll(".choice-btn");
  allbtn.forEach((button) => {
    button.disabled = true;
  });

  // Check if the selected answer is correct
  if (selectedChoice == curr.correctAnswer) {
    // If correct, make the selected button green
    document.querySelectorAll('.choice-btn').forEach(button => {
      if (button.textContent === selectedChoice) {
        button.style.border = '2px solid green'; // Green for correct answer
        button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        ${button.textContent}
      `;
      }
    });
    feed.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      Correct Answer, you are doing Awesome!
    `;
    feed.style.color = "green";
    score++;
  } else {
    // If incorrect, make the selected button red
    document.querySelectorAll('.choice-btn').forEach(button => {
      if (button.textContent === selectedChoice) {
        button.style.border = '2px solid red'; // Red for incorrect answer
        button.innerHTML = `
        <span style="display: inline-flex; align-items: center; justify-content: center; ">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="red" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; flex-shrink: 0;">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
          ${button.textContent}
        </span>
      `;
      
      }
      if (button.textContent === curr.correctAnswer) {
        // Always show correct answer ✔️
        button.style.border = '2px solid green';
        button.style.backgroundColor = '#d4edda';
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;">
            <path d="M20 6L9 17l-5-5"></path>
          </svg> 
          ${button.textContent}
        `;
      }
    });
    feed.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
    Wrong answer, please read the syllabus again!
  `;
    feed.style.color = "red";
  }

  score1.textContent = "You scored " + score + " out of " + questions.length;

  // Show next button after answer is selected
  next.style.display = "block";
}

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQue(); // Load the next question
  } else {
    showScore(); // If no questions are left, show the score
  }
});

function showScore() {
  quiz.innerHTML = `<h2>Quiz COMPLETED</h2>
    <p>Your score is ${score} out of ${questions.length}</p>
    <button onclick="location.reload()">Restart Again</button>`;
}
