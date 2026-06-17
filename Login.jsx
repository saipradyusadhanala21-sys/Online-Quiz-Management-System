import "./Login.css";

function Login({ setLoggedIn }) {

  return (

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="left-side">

        <div className="content">

          <h1>
            Learn Smarter.<br />
            Achieve More.
          </h1>

          <p>
            Interactive quizzes, AI-powered learning,
            and real-time performance tracking for
            students and teachers.
          </p>

          <div className="cards">

            <div className="card">
              <h2>50K+</h2>
              <span>Students</span>
            </div>

            <div className="card">
              <h2>10K+</h2>
              <span>Quizzes</span>
            </div>

            <div className="card">
              <h2>95%</h2>
              <span>Success</span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="right-side">

        <div className="login-box">

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to continue your learning journey
          </p>

         <input
  type="text"
  placeholder="Student Name"
  onChange={(e) =>
    localStorage.setItem(
      "studentName",
      e.target.value
    )
  }
/>

          <input
            type="password"
            placeholder="Password"
          />

          <button
            onClick={() => setLoggedIn(true)}
          >
            Login
          </button>

        </div>

      </div>

    </div>

  );

}

export default Login;