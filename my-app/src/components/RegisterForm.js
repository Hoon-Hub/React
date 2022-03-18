import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  // const [
  //   idInfo = {
  //     email: "",
  //     password: "",
  //     passwordConfirm: "",
  //     passwordConfirmCheck: true,
  //   },
  //   setIdInfo,
  // ] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmCheck, setPasswordConfirmCheck] = useState(true);
  const [registProcess, setRegistProcess] = useState(false);
  const [login, setLogin] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);

    if (password !== e.target.value) {
      setPasswordConfirmCheck(false);
    } else setPasswordConfirmCheck(true);
  };

  const registCheck = (e) => {
    e.preventDefault();

    // 회원가입 중
    setRegistProcess(true);

    if (
      !email ||
      !password ||
      !passwordConfirm ||
      password !== passwordConfirm
    ) {
      setRegistProcess(false);
      return;
    } else {
      // localstorage 저장
      const userData = {
        email: email,
        password: password,
      };
      console.log(userData);
      window.localStorage.setItem("userData", JSON.stringify(userData));

      // 회원가입 프로세스 종료
      setRegistProcess(false);
      setLogin(true);
      // 로그인페이지로 이동
      navigate("/");
    }
  };

  const quitRegister = () => {
    navigate(-1);
  };

  return (
    <div className="register-form">
      <h2 className="register-title">Register</h2>
      <form>
        <input
          type="email"
          email={email}
          onChange={changeEmail}
          placeholder="사용하실 이메일을 입력해주세요"
        />
        <input
          type="password"
          password={password}
          onChange={changePassword}
          placeholder="password"
        />
        <input
          placeholder="password check"
          type="password"
          passwordConfirm={passwordConfirm}
          onChange={changePasswordConfirm}
        />
        <p className="password-confirm-wrong">
          {passwordConfirmCheck ? "" : "Password is incorrect."}
        </p>
        <button
          className="register-check-btn login-button"
          type="submit"
          onClick={registCheck}
        >
          {registProcess ? "Registing..." : "Regist"}
        </button>
        <button type="button" className="login-button" onClick={quitRegister}>
          Quit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
