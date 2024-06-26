import React from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean,
  lightOrDark: boolean,
  // deadline(期限クリアの有無)に関しては今は仮置き
  deadLine: boolean,
  onClickFunc: () => void
}

// レスポンシブはあとで
// 1000pxと800pxと700pxと500px

// fontの色は共通(ボタンだけ違う)
const succeedBGColor: string =`
background: linear-gradient(to right, #FF3131, #FF914D);
`

const lightModeBGColor: string =`
background: #F5FFA2;
`

const lightModeCDSColor: string =`
background: #FDFFE2;
`

const darkModeBGColor: string =`
background: #5A72A0;
color: #FDFFE2;
`
const darkModeCDSColor: string =`
background: #97A0B2;
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

const Modal = styled.div<{isDeadLine: boolean, isLightOrDark: boolean}>`
color: ${props => props.isLightOrDark ? "black" : "#FDFFE2"};
z-index:2;
width:50%;
padding: 1em;
${props => props.isDeadLine ? succeedBGColor : props.isLightOrDark ? lightModeBGColor : darkModeBGColor}
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

const Button = styled.div<{isLightOrDark: boolean}>`
font-size: 3rem;
width: 15rem;
margin: 0 auto;
border: 0.2rem black solid;
border-radius: 0.8rem;
margin-bottom: 1rem;
`

// 
const CountdownSpace = styled.div<{isDeadLine: boolean, isLightOrDark: boolean}>`

border-radius: 0.8rem;
padding: 1rem;
margin: 1rem 0;
${props => props.isDeadLine ? succeedBGColor : props.isLightOrDark ? lightModeCDSColor : darkModeCDSColor}
`

const MessageWrapper = styled.div`
padding: 0;
margin: 0;
`

const MessageHeading = styled.h1`
margin: 0;
font-size: 4rem;
`

const MessageSub = styled.p`
margin: 0;
font-size: 2rem;
`

const MessageCount = styled.h2`
margin: 0;
font-size: 3rem;
`

const CountItemModal = (props: Props) => {

  if (props.show) {
    return (
    <Wrapper>
      <Modal isDeadLine={props.deadLine} isLightOrDark={props.lightOrDark}>
        <MessageWrapper>
          <MessageHeading>
            ビール
          </MessageHeading>
          <MessageSub>
            を今まで
          </MessageSub>
          <MessageCount>
            XX日
          </MessageCount>
          <MessageCount>
            XX時間XX分XX秒
          </MessageCount>
          <MessageSub>
            耐えている！
          </MessageSub>
        </MessageWrapper>
        <CountdownSpace isDeadLine={props.deadLine} isLightOrDark={props.lightOrDark}>
          {props.deadLine ? 
            <><MessageCount>目標達成</MessageCount><MessageCount>おめでとう！</MessageCount></> : 
            <><MessageSub>目標まであと</MessageSub><MessageCount>XX日</MessageCount><MessageCount>XX時間XX分XX秒</MessageCount></>
          }
        </CountdownSpace>
        <Button isLightOrDark={props.lightOrDark}>終了する</Button>
        <Button isLightOrDark={props.lightOrDark} onClick={props.onClickFunc}>閉じる</Button>
      </Modal>
    </Wrapper>
    )
  } else {
    return null;
  }

}

export default CountItemModal