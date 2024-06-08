import React from 'react'
import styled from 'styled-components'
import TopMessage from './TopMessage'

type Props = {
  backgroundColor: string
  fontColor: string
}

const Main = (props: Props) => {

  const Wrapper = styled.main`
    text-align: center;
    ${props.backgroundColor};
    ${props.fontColor}
    margin: 0 auto;
    padding: 10rem 0 10rem;
  `

  const MainTitle = styled.h1`
    font-weight: bold;
    margin: 0 auto;
  `

  const SubTitle = styled.h2`
    font-weight: bold;
    margin: 0 auto;
  `

  const backgroundMessageLightMode: string = `
    background: #5A72A0;
  `

  return (
    <Wrapper>
      <MainTitle>
        世界忍耐時計
      </MainTitle>
      <SubTitle>
        -PatienceDay Clock-
      </SubTitle>
      <TopMessage backgroundColor={backgroundMessageLightMode} />
    </Wrapper>
  )
}

export default Main