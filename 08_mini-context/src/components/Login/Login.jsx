import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Bydefault value go somewhere through url or post method, which we prevent
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
