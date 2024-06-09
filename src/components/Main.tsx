import React from 'react'
import styled from 'styled-components'
import TopMessage from './TopMessage'

type Props = {
  lightOrDark: boolean
}

const Main = (props: Props) => {
  // 500pxでメディアクエリ

  const lightMode: string = `
    color: black;
    background: #FDFFE2;
  `

  const darkMode: string = `
    color: #FDFFE2;
    background: #223A70;
  `

  const Wrapper = styled.main`
    text-align: center;
    ${props.lightOrDark ? lightMode : darkMode};
    margin: 0 auto;
    padding: 5rem 0 5rem;
  `

  const MainTitle = styled.h1`
    font-weight: normal;
    margin: 0 auto;
    font-size: 7.2rem;
    @media (max-width: 500px) {
      font-size: 3.7rem;
    }
  `

  const SubTitle = styled.h2`
    font-weight: normal;
    margin: 0 auto;
    font-size: 4.8rem
    @media (max-width: 500px) {
      font-size: 2.4rem;
    }
  `

  return (
    <Wrapper>
      <MainTitle>
        世界忍耐時計
      </MainTitle>
      <SubTitle>
        -PatienceDay Clock-
      </SubTitle>
      <TopMessage lightDark={props.lightOrDark} />
    </Wrapper>
  )
}

export default Main