import React from 'react'
import styled from 'styled-components'
// import CountItemModal from './Modal/CountItemModal'
// import { useState } from 'react'

type Props= {
  darkOrLight: boolean,
  deadLine: boolean,
  // 期限or記録
  content: string,
  // モーダルの開閉
  onClickFunc: () => void
}

// 履歴からでも呼び出せるようにする

const CountItem = (props: Props) => {


  const lightModeHead: string = `
    background: #FFFE71;
  `

  const lightModeContent: string = `
    background: #F5FFA2;
  `

  const darkModeHead: string = `
    background: #5A72A0;
  `

  const darkModeContent: string = `
    background: #97A0B2;
  `

  const succeedColorHead: string = `
    background: #FF5B00;
  `

  const succeedColorContent: string = `
    background: #FD7327;
  `

  // 親コンポーネントのメディアクエリを打ち消し
  const Item = styled.div`
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

  // 忍耐の内容
  const Heading = styled.p`
    ${props.deadLine ? succeedColorHead : props.darkOrLight ? lightModeHead : darkModeHead}
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
    border-bottom: 0.1rem black solid;
  `

  // 忍耐の期限(履歴では記録)
  const Content = styled.p`
    ${props.deadLine ? succeedColorContent : props.darkOrLight ? lightModeContent : darkModeContent}
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
  `

  return (
    <Item onClick={props.onClickFunc}>
      <Heading>忍耐事項: ビール</Heading>
      <Content>{props.content}</Content>
    </Item>
  )
}

export default CountItem