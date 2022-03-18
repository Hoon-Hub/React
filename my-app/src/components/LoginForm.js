import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState(true);
  const navigate = useNavigate();

  const LoginCheck = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    // 로그인 정보 localstorage
    const data = window.localStorage.getItem("userData");
    const userData = JSON.parse(data);

    if ((email === userData.email) & (password === userData.password)) {
      navigate("/");
    } else {
      setLoginResult(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 4) {
    }
  };

  const Register = () => {
    navigate("/register");
    console.log("sdsd");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("userData");
    const userData = JSON.parse(data);
    if (userData) navigate("/");
  });

  return (
    <div className="login-form">
      <h2 className="login-title">Login</h2>
      <form>
        <input
          onChange={onChangeEmail}
          autoFocus
          placeholder="example@example.com"
          type="email"
          name="email"
        />
        <input
          placeholder="password"
          type="password"
          name="id"
          onChange={onChangePassword}
        />
        <p className="password-confirm-wrong">
          {loginResult ? "" : "정보가 일치하지 않습니다"}
        </p>
        <button
          className="login-btn login-button"
          type="submit"
          onClick={LoginCheck}
        >
          Login
        </button>
      </form>
      <button type="button" className="login-button " onClick={Register}>
        Register
      </button>
    </div>
  );
};

export default LoginForm;
