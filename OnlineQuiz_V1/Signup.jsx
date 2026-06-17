import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (

    <div className="center-page">

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Username"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button onClick={handleSignup}>
        Create Account
      </button>

    </div>

  );
}

export default Signup;