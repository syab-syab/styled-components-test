import React from 'react'
import styled from 'styled-components'

type Props = {
  backgroundColor: string
}

const TopMessage = (props: Props) => {
  // section以外の方が良いかも
  const MessageSection = styled.p`
    border: dashed black;
    width: 20rem;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    ${props.backgroundColor}
  `

  return (
    <MessageSection>
      現在我慢している項目がありません。
    </MessageSection>
  )
}

export default TopMessage