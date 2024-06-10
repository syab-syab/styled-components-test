import React from 'react'
import styled from 'styled-components'
import CountItem from './CountItem'

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


  return (
    <Wrapper>
      {/* 本番環境ではmapで回すから現段階で真偽値は手打ち */}
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={true}></CountItem>
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
    </Wrapper>
  )
}

export default CountSection