import React from 'react'
import styled from 'styled-components';

const StyledComponentExample = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    @media (max-width: 767px) {
      color: red;
    }
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const tmp: string = `
    font-size: 3rem;
    color: blue;
  `
  

  const Test = styled.p`
    ${tmp}
  `
  return (
    <Wrapper >
      <Title >
          Hello World!
      </Title>
      <Test>
        Test Text
      </Test>
  </Wrapper>
  )
}

export default StyledComponentExample