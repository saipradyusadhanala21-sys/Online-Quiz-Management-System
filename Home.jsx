import { Link } from "react-router-dom";

function Home() {
  return (

    <div className="center-page">

      <h1>⚡ QUIZVERSE</h1>

      <p>
        AI Powered Learning Platform
      </p>

      <Link to="/login">
        <button>Get Started</button>
      </Link>

    </div>

  );
}

export default Home;