import { useState, useEffect } from "react";
import "./Dashboard.css";

import {

  subjects,
  topics,
  levels,
  quizDatabase

}

from "../data/quizData";
import TeacherDashboard from "./TeacherDashboard";
function Dashboard() {

  /* STATES */

  const [selectedClass, setSelectedClass] =
  useState("");

  const [selectedSubject, setSelectedSubject] =
  useState("");

  const [selectedTopic, setSelectedTopic] =
  useState("");

  const [selectedLevel, setSelectedLevel] =
  useState("");

  const [showSubjects, setShowSubjects] =
  useState(false);

  const [showTopics, setShowTopics] =
  useState(false);

  const [showLevels, setShowLevels] =
  useState(false);

  const [startQuiz, setStartQuiz] =
  useState(false);

  const [currentQuestion, setCurrentQuestion] =
  useState(0);

  const [score, setScore] =
  useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  useEffect(() => {

  if (!startQuiz) return;

  const timer = setInterval(() => {

    setTimeLeft((prev) => prev - 1);

  }, 1000);

  return () => clearInterval(timer);

}, [startQuiz]);
const [teacherMode, setTeacherMode] =
useState(false);
const [studentName, setStudentName] =
useState(
localStorage.getItem("studentName")
|| ""
);
  /* CURRENT QUIZ */

  const currentQuiz =

    quizDatabase
    ?. [selectedSubject]
    ?. [selectedTopic]
    ?. [selectedLevel]

    || [];

  /* CLASS */

  const handleClass = (item) => {

    setSelectedClass(item);

    setShowSubjects(true);

  };

  /* SUBJECT */

  const handleSubject = (subject) => {

    setSelectedSubject(subject);

    setShowTopics(true);

  };

  /* TOPIC */

  const handleTopic = (topic) => {

    setSelectedTopic(topic);

    setShowTopics(false);

    setShowLevels(true);

  };

  /* LEVEL */

  const handleLevel = (level) => {

    setSelectedLevel(level);

    setStartQuiz(true);

  };

  /* ANSWER */

  const handleAnswer = (option) => {

    if (
      option ===
      currentQuiz[currentQuestion].answer
    ) {

      setScore(score + 1);

    }

    const nextQuestion =
    currentQuestion + 1;

    if (
      nextQuestion < currentQuiz.length
    ) {

      setCurrentQuestion(nextQuestion);

    }

    else {

     const finalScore = score + 1;

const oldScores =
JSON.parse(
localStorage.getItem("scores")
) || [];

oldScores.push({

name:
localStorage.getItem(
  "studentName"
) || "Student",
  class: selectedClass,

  subject: selectedSubject,

  topic: selectedTopic,

  level: selectedLevel,

  score:
  `${finalScore}/${currentQuiz.length}`

});

localStorage.setItem(
  "scores",
  JSON.stringify(oldScores)
);

alert(
`Quiz Completed 🎉
Score: ${finalScore}/${currentQuiz.length}`
);

      setCurrentQuestion(0);

      setScore(0);

      setStartQuiz(false);

      setShowLevels(false);

      setShowSubjects(false);

    }

  };

  /* QUIZ PAGE */

  if (startQuiz) {

    return (

      <div className="quiz-page">
<button
  onClick={() => {

    setStartQuiz(false);

    setCurrentQuestion(0);

    setShowLevels(true);

  }}
>
  ← Exit Quiz
</button>
        <div className="quiz-container">

          <div className="quiz-top">

            <h1>

              {selectedSubject}
              {" - "}
              {selectedTopic}

            </h1>

            <div className="quiz-badge">

  {selectedLevel}

  <br />

  ⏰ {Math.floor(timeLeft / 60)}:
  {String(timeLeft % 60).padStart(2, "0")}

</div>

          </div>

          <div className="question-count">

            Question
            {currentQuestion + 1}
            / {currentQuiz.length}

          </div>

          <div className="question-box">

            <h2>

              {
                currentQuiz[currentQuestion]
                ?.question
              }

            </h2>

            <div className="options">

              {
                currentQuiz[
                  currentQuestion
                ]
                ?.options
                ?.map((option) => (

                  <button
                    className="option-btn"
                    key={option}
                    onClick={() =>
                      handleAnswer(option)
                    }
                  >

                    {option}

                  </button>

                ))
              }

            </div>

          </div>

        </div>

      </div>

    );

  }

  /* LEVEL PAGE */

  if (showLevels) {

    return (

      <div className="levels-page">
<button
  onClick={() => {

    setShowLevels(false);
    setShowTopics(true);

  }}
>
  ← Back
</button>
        <h1>
          Choose Difficulty
        </h1>

        <div className="levels-grid">

          {
            levels.map((level) => (

              <div
                className="level-card"
                key={level}
                onClick={() =>
                  handleLevel(level)
                }
              >

                <h2>
                  {level}
                </h2>

              </div>

            ))
          }

        </div>

      </div>

    );

  }

  /* TOPICS PAGE */

  if (showTopics) {

    return (

      <div className="subjects-page">
<button
  onClick={() => {

    setShowTopics(false);
    setShowSubjects(true);

  }}
>
  ← Back
</button>
        <h1>

          {selectedSubject} Topics

        </h1>

        <div className="subjects-grid">

          {
            topics[selectedSubject]
            ?.map((topic) => (

              <div
                className="subject-card"
                key={topic}
              >

                <div className="subject-icon">

                  📚

                </div>

                <h3>

                  {topic}

                </h3>

                <button
                  onClick={() =>
                    handleTopic(topic)
                  }
                >

                  Start Topic

                </button>

              </div>

            ))
          }

        </div>

      </div>

    );

  }

  /* SUBJECT PAGE */

  if (showSubjects) {

  return (

    <div className="subjects-page">

      <button
        onClick={() => {

          setShowSubjects(false);
          setSelectedClass("");

        }}
      >
        ← Back
      </button>

        <h1>

          {selectedClass} Subjects

        </h1>

        <div className="subjects-grid">

          {
            subjects[selectedClass]
            ?.map((subject) => (

              <div
                className="subject-card"
                key={subject}
              >

                <div className="subject-icon">

                  📘

                </div>

                <h3>

                  {subject}

                </h3>

                <button
                  onClick={() =>
                    handleSubject(subject)
                  }
                >

                  Start Learning

                </button>

              </div>

            ))
          }

        </div>

      </div>

    );

  }
if (teacherMode) {

  return (
    <TeacherDashboard />
  );

}
  /* MAIN PAGE */
 
  return (

    <div className="dashboard">

      <div className="hero-section">

        <h1>
          Learn Smarter With AI Quizzes
        </h1>

        <p>
          Interactive quizzes for every class.
        </p>
        <button
  onClick={() => {

    localStorage.removeItem(
      "studentName"
    );

    window.location.reload();

  }}
  style={{
    background:"#ef4444",
    color:"white",
    border:"none",
    padding:"14px 25px",
    borderRadius:"16px",
    cursor:"pointer",
    marginRight:"10px"
  }}
>
  🚪 Logout
</button>
<button
  className="teacher-btn"
  onClick={() => {

    alert("Button Works");

    setTeacherMode(true);

  }}
>
  👨‍🏫 Teacher Dashboard
</button>
      </div>
<div
  style={{
    background: "linear-gradient(135deg,#6a5cff,#8b5cf6)",
    color: "white",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "25px"
  }}
>
  <h2>
    👋 Welcome, {studentName}
  </h2>

  <p>
    Ready to test your knowledge today?
  </p>
</div>
      <h2 className="section-title">

        Browse By Class

      </h2>

      <div className="class-grid">

        {
          Object.keys(subjects)
          .map((item) => (

            <div
              className="class-card"
              key={item}
            >

              <div className="class-icon">

                🎓

              </div>

              <h3>

                {item}

              </h3>

              <button
                onClick={() =>
                  handleClass(item)
                }
              >

                Explore

              </button>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Dashboard;