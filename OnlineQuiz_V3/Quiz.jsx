import { Link } from "react-router-dom";

function Quiz() {
  return (

    <div className="center-page">

      <h1>Quiz Page 🧠</h1>

      <p>
        Question 1 goes here...
      </p>

      <Link to="/result">
        <button>Finish Quiz</button>
      </Link>

    </div>

  );
}

export default Quiz;