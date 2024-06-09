import React from 'react'
import styled from 'styled-components'

type Props = {
  lightOrDark: boolean
}

const FixedMenu = (props: Props) => {

  const lightMode: string = `
    color: #FDFFE2;
    background: #223A70;
    &:hover {
      background: #83B4FF;
    }
  `

  const darkMode: string = `
    color: black;
    background: #FDFFE2;
    &:hover {
      background: #F5FFA2;
    }
  `

  // const Wrapper = styled.div`
  // `

  const FixedMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const MenuItem = styled.div`
    flex-direction: column;
    flex-grow: 1;
    ${props.lightOrDark ? lightMode : darkMode};
    border: solid 1px;
    font-size: 3rem
  `
  return (
    <>
      <FixedMenu>
        <MenuItem>リンク</MenuItem>
        <MenuItem>追加</MenuItem>
        <MenuItem>履歴</MenuItem>
      </FixedMenu>
    </>
  )
}

export default FixedMenu