import React from 'react'
import styled from 'styled-components'

const FixedMenu = () => {
  const Wrapper = styled.div`
    
  `

  const FixedMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const MenuItem = styled.div`
    flex-direction: column;
    flex-grow: 1;
    background-color: #223A70;
    color: #FDFFE2;
    border: solid 1px;
    font-size: 3rem
  `
  return (
    <Wrapper>
      <FixedMenu>
        <MenuItem>リンク</MenuItem>
        <MenuItem>追加</MenuItem>
        <MenuItem>履歴</MenuItem>
      </FixedMenu>
    </Wrapper>
  )
}

export default FixedMenu