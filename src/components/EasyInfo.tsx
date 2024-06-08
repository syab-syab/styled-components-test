import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string
}

// ヘッダーとフッター用
const EasyInfo = (props: Props) => {
  // 後でheaderにも出来るように書き直す
  const InfoBar = styled.footer`
  background: black;
  color: #FDFFE2;
  text-align: center;
  `

  return (
    <InfoBar>
      <span>{props.value}</span>
    </InfoBar>
  )
}

export default EasyInfo