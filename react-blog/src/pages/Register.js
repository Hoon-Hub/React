import React, { useState } from 'react'
import HomeMain from '../components/HomeMain'
import AppLayout from '../_layout/appLayout'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'


const RegisterDiv = styled.div`
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-top: 30px;
  margin: 30px auto;
  padding: 50px;
`
const Register = () => {
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
    <AppLayout>
      <RegisterDiv>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoFocus onChange={onChangeEmail} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={submitClickHandler}>
            로그인
          </Button>
        </Form>
      </RegisterDiv>
    </AppLayout>
  )
}

export default Register