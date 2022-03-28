import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useInput } from '../../hook/useInput'

const RegisterMain = () => {
  const [email, onChangeUserEmail] = useInput('');
  const [name, onChangeUserName] = useInput('');
  const [password, onChangeUserPassword] = useInput('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordCheckMessage, setPasswordCheckMessage] = useState('');

  const onChangeConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value)
      setPasswordCheckMessage(e.target.value !== password)
    },
    [password],
  )


  return (
    <>
      <RegisterForm>
        <h1>회원가입</h1>
        <div>
          <input type="text"
            name="user-email"
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={onChangeUserEmail}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input type="text"
            name="user-name"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={onChangeUserName}
            required
          />
        </div>
        <div>
          <input type="password"
            name="user-password"
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={onChangeUserPassword}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input type="password"
            name="user-confirm-password"
            placeholder='비밀번호 재입력'
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            autoComplete="off"
            required
          />
        </div>
        {passwordCheckMessage && (
          <CheckMessage>비밀번호가 일치하지 않습니다.</CheckMessage>
        )}
        <button>회원가입</button>
        <Link to="/">취소</Link>
      </RegisterForm>
    </>
  )
}

const RegisterForm = styled.form`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: #4F5681;
  }

  & input {
    box-sizing: border-box;
    width: 50%;
    margin: 0.1rem 0;
    padding: 0.35rem;
    border: 1px solid #DDD;
    font-size: 0.875rem;
    color: #666;
  }

  & input::placeholder {
    font-size: 0.875rem;
    color: #ccc;
  }

  & input:focus {
    outline: none;
    border: 1px solid #7784cc;
    box-shadow: 0 0 0 0.1rem rgb(59 65 99/ 25%);
  }

  & button {
    box-sizing: border-box;
    width: 50%;
    margin: 0.2rem;
    padding: 0.3rem 0;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background: #4F5681;
    cursor: pointer;
  }

  & button:hover {
    background: #3b4163;
  }

  & a {
    display: block;
    font-size: 0.875rem;
    color: #666;
  }
`

const CheckMessage = styled.p`
  width: 50%;
  margin: 0 auto;
  padding: 0;
  font-size: 0.875rem;
  color: red;
  text-align: left;
`

export default RegisterMain