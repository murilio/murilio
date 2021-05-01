import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  background-color: var(--color-dark-roxo);
  padding: 47px 5%;

  > span {
    display: block;
    width: 125px;
    height: 2px;
    background-color: var(--color-contraste);
    margin: 11px 0 42px;
  }

  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media only screen and (min-width: 768px) {
      justify-content: space-between;
    }
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 63px;
  color: var(--color-branco);

  > span {
    color: var(--color-contraste);
  }
`
