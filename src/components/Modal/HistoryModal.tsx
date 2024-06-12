import React from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean,
  lightOrDark: boolean,
  onClickFunc: () => void
}

// ライトモード
const lightModeBGColor: string = `
  background: #F5FFA2;
`


// ダークモード
const darkModeBGColor: string = `
  background: #5A72A0;
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

const Modal = styled.div<{isLightOrDark: boolean}>`
color: ${props => props.isLightOrDark ? "black" : "#FDFFE2"};
z-index:2;
width:50%;
padding: 1em;
${props => props.isLightOrDark ? lightModeBGColor : darkModeBGColor}
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

const Button = styled.div`
font-size: 3rem;
width: 15rem;
margin: 0 auto;
border: 0.2rem black solid;
border-radius: 0.8rem;
margin-bottom: 1rem;
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
      <Modal isLightOrDark={props.lightOrDark}>
        <MessageWrapper>
          <MessageHeading>
            履歴
          </MessageHeading>
        </MessageWrapper>
        <Button onClick={props.onClickFunc}>閉じる</Button>
      </Modal>
    </Wrapper>
    )
  } else {
    return null;
  }
}

export default HistoryModal