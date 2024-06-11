import React from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean,
  lightOrDark: boolean,
  onClickFunc: () => void
}


// モードの色があべこべだから後で直す

// ライトモード
// 文字色#FDFFE2
// 背景#223A70,
const lightModeBGColor: string = `
  background: #223A70;
  color: #FDFFE2;
`
// 閉じるボタン背景#FDFFE2(文字色黒)
const lightModeBTNColor: string = `
  background: #FDFFE2;
  color: black;
`

// ダークモード
// 文字色,
// 背景色#FDFFE2(または#FFFE71)
const darkModeBGColor: string = `
  background: #223A70;
  color: black;
`
// 閉じるボタン背景#5A72A0(文字色黒)
const darkModeBTNColor: string = `
  background: #5A72A0;
  color: black;
`

// ライトダーク共にスタートボタン背景#FF5B00(文字色黒) 
const startBTNColor: string = `
  background: #FF5B00;
  color: black;
`

const Wrapper = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);

display: flex;
align-items: center;
justify-content: center;
`

const Modal = styled.div<{isDarkOrLight: boolean}>`
color: black;
z-index:2;
width:50%;
padding: 1em;
${props =>  props.isDarkOrLight ? lightModeBGColor : darkModeBGColor}
border: 0.2rem black solid;
border-radius: 0.8rem;
@media (max-width: 1000px) {
  width: 70%;
}
@media (max-width: 800px) {
  width: 80%;
}
@media (max-width: 700px) {
  width: 90%;
}
@media (max-width: 500px) {
  width: 95%;
  padding: 0.3em;
}
`

const CloseButton = styled.div<{isDarkOrLight: boolean}>`
font-size: 3rem;
width: 15rem;
margin: 0 auto;
border: 0.2rem black solid;
border-radius: 0.8rem;
margin-bottom: 1rem;
${props => props.isDarkOrLight ? lightModeBTNColor : darkModeBTNColor}
`

const StartButton = styled.div`
  font-size: 3rem;
  width: 15rem;
  margin: 0 auto;
  border: 0.2rem black solid;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  ${startBTNColor}
`

const MessageWrapper = styled.div`
padding: 0;
margin: 0;
font-size: 4rem;
`

const MessageHeading = styled.h1`
  margin: 0;
  font-size: 4rem;
`

const MessageSub = styled.p`
  margin: 0;
  font-size: 2rem;
`

const ContentInput = styled.input`
  margin: 1rem;
`
const DayInput = styled.input`
  margin: 1rem;
`

const TimeInput = styled.input`
  margin: 1rem;
`

const AddModal = (props: Props) => {

  if (props.show) {
    return (
      <Wrapper>
        <Modal isDarkOrLight={props.lightOrDark}>
          <MessageWrapper>
            <MessageHeading>
              何を我慢する？
            </MessageHeading>
            <ContentInput type='text' />
            <MessageSub>
              どのくらい我慢する？
            </MessageSub>
            <DayInput type='text' />日
            <br />
            {/* ↓は本番ではselect */}
            <TimeInput type='text' />時間
          </MessageWrapper>
          <StartButton>スタート</StartButton>
          <CloseButton isDarkOrLight={props.lightOrDark} onClick={props.onClickFunc}>閉じる</CloseButton>
        </Modal>
      </Wrapper>
    )
  } else {
    return null;
  }
}

export default AddModal