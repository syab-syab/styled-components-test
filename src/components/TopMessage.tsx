import React from 'react'
import styled from 'styled-components'

type Props = {
  backgroundColor: string
}

const TopMessage = (props: Props) => {
  // section以外の方が良いかも
  const MessageSection = styled.p`
    border: dashed black;
    width: auto;
    font-weight: bold;
    ${props.backgroundColor}
  `

  return (
    <MessageSection>
      現在我慢している項目がありません。
    </MessageSection>
  )
}

export default TopMessage