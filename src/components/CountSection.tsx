import React from 'react'
import styled from 'styled-components'

type Props = {
  darkOrLight: boolean
}

const CountSection = (props: Props) => {
  const lightMode: string = `
    background: #5A72A0;
  `

  const darkMode: string = `
    background: #FDFFE2;
  `
  // 900pxくらいでpaddingが限界
  // とりあえずメディアクエリは暫定
  const Wrapper = styled.section`
    padding: 0 20rem;
    @media (max-width: 900px) {
      padding: 0 10rem;
    }
    @media (max-width: 800px) {
      padding: 0 7rem;
    }
    @media (max-width: 700px) {
      padding: 0 6rem;
    }
    @media (max-width: 500px) {
      padding: 0 3rem;
    }
  `

  // 親コンポーネントのメディアクエリを打ち消し
  const Item = styled.div`
    ${props.darkOrLight ? lightMode : darkMode}
    border: 0.1rem solid black;
    font-size: 5rem;
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 500px) {
      font-size: 3.7rem;
      font-weight: normal;
      margin-bottom: 2rem;
    }
  `
  return (
    <Wrapper>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
      <Item>CountItem</Item>
    </Wrapper>
  )
}

export default CountSection