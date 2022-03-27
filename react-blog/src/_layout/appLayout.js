import React from 'react'
import { Nav } from 'react-bootstrap'

const appLayout = ({ children }) => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">회원가입</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">로그인</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {children}
      </div>
    </>
  )
}

export default appLayout