import React from 'react'
import styled from 'styled-components'
import Post from './post/Post'
import PostForm from './post/PostForm'

const HomeMain = () => {
  return (
    <>
      <StyledWrap>
        <PostForm></PostForm>
        <Post></Post>
      </StyledWrap>
    </>

  )
}

const StyledWrap = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`


export default HomeMain