import styled from 'styled-components'

export const Container = styled.div`
  .web {
    display: none;
    position: relative;

    > span {
      position: absolute;
      right: 0;
      top: 25px;
      font-size: 14px;
      background-color: #f3f3f3;
      padding: 2px 10px;
      color: var(--color-preto);
      width: max-content;
      border-radius: 3px;
    }
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
