import React from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean,
  lightOrDark: boolean,
  onClickFunc: () => void
}

// ライトモード
// 背景色#223A70
// 文字色#FDFFE2
const lightModeBGColor: string = `
  background: #223A70;
  color: #FDFFE2;
`
// 閉じるボタン背景色#FDFFE2文字色黒
const lightModeBTNColor: string = `
  background: #FDFFE2;
  color: black;
`

// ダークモード
// 背景色#FFFE71(または#FDFFE2)文字色黒
const darkModeBGColor: string = `
  background: #FDFFE2;
  color: black;
`
// 閉じるボタン背景色#5A72A0文字色黒
const darkModeBTNColor: string = `
  background: #5A72A0;
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
${props => props.isDarkOrLight ? lightModeBGColor : darkModeBGColor}
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

const Button = styled.div<{isDarkOrLight: boolean}>`
font-size: 3rem;
width: 15rem;
margin: 0 auto;
border: 0.2rem black solid;
border-radius: 0.8rem;
margin-bottom: 1rem;
${props => props.isDarkOrLight ? lightModeBTNColor : darkModeBTNColor}
`

const MessageWrapper = styled.div`
padding: 0;
margin: 0;
`

const MessageHeading = styled.h1`
margin: 0;
font-size: 4rem;
`

const HistoryModal = (props: Props) => {


  if (props.show) {
    return (
    <Wrapper>
      <Modal isDarkOrLight={props.lightOrDark}>
        <MessageWrapper>
          <MessageHeading>
            履歴
          </MessageHeading>
        </MessageWrapper>
        <Button isDarkOrLight={props.lightOrDark} onClick={props.onClickFunc}>閉じる</Button>
      </Modal>
    </Wrapper>
    )
  } else {
    return null;
  }
}

export default HistoryModal