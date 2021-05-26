import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;

  > a {
    display: flex;
    position: relative;

    > img {
      width: 25px;
      height: 25px;
    }

    span {
      height: 1px;
      width: 1px;
      position: absolute;
      overflow: hidden;
      top: -10px;
    }
  }
`
