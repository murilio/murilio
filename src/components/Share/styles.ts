import styled from 'styled-components'

export const Container = styled.div`
  .web {
    display: none;
  }

  .web button, .mobile button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .web {
      display: initial;
    }

    .mobile {
      display: none;
    }
  }
`
