import React, { useState } from 'react'
import Layout from '../_layout/Layout'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import LoginMain from '../components/login/LoginMain'


const LoginDiv = styled.div`
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-top: 30px;
  margin: 30px auto;
  padding: 50px;
`
const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPw(e.target.value)
  }

  const submitClickHandler = () => {
    if (!email || !pw) {
      return;
    }

    dispatch({
      type: 'USER_LOGIN',
      data: { email: email, password: pw }
    })


  }
  return (
    <>
      <Layout>
        <LoginMain></LoginMain>
      </Layout>
    </>
  )
}

export default Login