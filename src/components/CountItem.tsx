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

// 外に定義してみる
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

// 下の二つにエラー出てるけど後回し
// 忍耐の内容
const Heading = styled.p<{isDeadLine: boolean, isDarkOrLight: boolean}>`
  ${props => props.isDeadLine ? succeedColorHead : props.isDarkOrLight ? lightModeHead : darkModeHead}
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 0.1rem black solid;
`

// 忍耐の期限(履歴では記録)
const Content = styled.p<{isDeadLine: boolean, isDarkOrLight: boolean}>`
  ${props => props.isDeadLine ? succeedColorContent : props.isDarkOrLight ? lightModeContent : darkModeContent}
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
`

const CountItem = (props: Props) => {

  return (
    <>
      <Item onClick={props.onClickFunc}>
        <Heading isDeadLine={props.deadLine} isDarkOrLight={props.darkOrLight}>忍耐事項: ビール</Heading>
        <Content isDeadLine={props.deadLine} isDarkOrLight={props.darkOrLight}>{props.content}</Content>
      </Item>    
    </>

  )
}

export default CountItem