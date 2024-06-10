import React from 'react'
import styled from 'styled-components'

type Props = {
  show: boolean,
  onClickFunc: () => void
}

const AddModal = (props: Props) => {

  const Wrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  `

  const AddModal = styled.div`
    z-index:2;
    width:50%;
    padding: 1em;
    background:#fff;
  `

  const Button = styled.div`
    border: 0.1rem solid black;

  `

  if (props.show) {
    return (
      <Wrapper>
        <AddModal>
          AddModal
          <Button onClick={props.onClickFunc}>閉じる</Button>
        </AddModal>
      </Wrapper>
    )
  } else {
    return null;
  }
}

export default AddModal