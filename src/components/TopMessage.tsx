import React from 'react'
import styled from 'styled-components'

type Props = {
  lightDark: boolean
}

const TopMessage = (props: Props) => {
  const backgroundLightMode: string = `
    background: #5A72A0;
  `

  const backgroundDarkMode: string = `
    background: #FDFFE2;
  `

  // section以外の方が良いかも
  const MessageSection = styled.p`
    border: dashed black;
    width: 45rem;
    font-size: 2.6rem;
    color: black;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    ${props.lightDark ? backgroundLightMode : backgroundDarkMode};
  `

  return (
    <MessageSection>
      現在我慢している項目がありません。
    </MessageSection>
  )
}

export default TopMessage