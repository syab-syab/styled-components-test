import React from 'react'
import styled from 'styled-components'
import CountItem from './CountItem'
import CountItemModal from './Modal/CountItemModal'
import { useState } from 'react'

type Props = {
  darkOrLight: boolean
}



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

const CountSection = (props: Props) => {
  // モーダルを追加する
  // const [modalShow, setModalShow] = useState<boolean>(false)
  const [modalShow, setModalShow] = useState<boolean>(true)

  const toggleModal = (): void => {
    setModalShow(!modalShow)
  }


  return (
    <Wrapper>
      {/* 本番環境ではmapで回すから現段階で真偽値は手打ち */}
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={true}></CountItem>
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>
      <CountItem onClickFunc={toggleModal} darkOrLight={props.darkOrLight} content="XXXX年XX月XX日XX時XX分まで" deadLine={false}></CountItem>

      {/* <button onClick={toggleModal}>モーダルテスト</button> */}
      {/* CountItemModalのdeadLineは仮置き */}
      <CountItemModal show={modalShow} deadLine={false} darkOrLight={props.darkOrLight} onClickFunc={toggleModal} />
    </Wrapper>
  )
}

export default CountSection