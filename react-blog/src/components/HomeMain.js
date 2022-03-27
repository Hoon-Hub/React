import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <Link to="/register">
      <Button variant="outline-primary">회원가입</Button>
    </Link>

  )
}

export default HomeMain