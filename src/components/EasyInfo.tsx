import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string,
  tag: boolean
}

// ヘッダーとフッター用
const EasyInfo = (props: Props) => {
  // 条件分岐でタグを選択
  // true = header, false = footer
  const tag: any = props.tag ? styled.header : styled.footer

  // 後でheaderにも出来るように書き直す
  const InfoBar = tag`
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