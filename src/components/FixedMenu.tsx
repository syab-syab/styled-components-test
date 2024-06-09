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
    padding: 1rem 0;
    vertical-align: center;
    flex-direction: column;
    flex-grow: 1;
    ${props.lightOrDark ? lightMode : darkMode};
    border: solid 1px;
    font-size: 3rem;
    @media (max-width: 500px) {
      font-size: 2rem;
      padding: 2rem 0;
      font-weight: bold;
    }
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