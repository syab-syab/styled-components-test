import React from 'react'
import styled from 'styled-components'

type Props = {
  lightOrDark: boolean,
  toggleVal: React.MouseEventHandler<HTMLButtonElement>
}

const ModeSwichBtn = (props: Props) => {

  const lightMode: string = `
    color: #FDFFE2;
    background: #223A70;
  `

  const darkMode: string = `
     color: black;
     background: #FDFFE2;
  `

  const Button = styled.button`
    ${props.lightOrDark ? lightMode : darkMode}
    font-size: 2.7rem;
    border: black solid;
    border-radius: 0.4rem;
    position: fixed;
    top: 5rem;
    right: 10rem;
  `

  return (
    <>
      <Button onClick={props.toggleVal}>{props.lightOrDark ? "ライト" : "ダーク"}</Button>
    </>
  )
}

export default ModeSwichBtn