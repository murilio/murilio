import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 240px;
  background-color: rgb(244, 244, 247);
  box-shadow: rgb(0 0 0 / 10%) 3px 5px 11px 2px;
  position: relative;

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    list-style: none;
    padding: 0;

    li {
      font-size: 14px;

      a {
        display: flex;
        align-items: center;
        gap: 5px;

        color: var(--color-dark-gray);

        &:hover {
          color: var(--color-contraste);
        }
      }

      .active {
        color: var(--color-contraste);
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: auto;
    width: auto;
    background: transparent;
    box-shadow: none;

    flex-direction: row;

    ul {
      flex-direction: row;
      margin: 0 100px 0 0;

      li > a {
        font-size: 14px;
      }
    }
  }
`
