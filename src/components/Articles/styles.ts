import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 47px 5%;
  margin: 0 0 80px 0;

  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 52px 0 0 0;

    @media only screen and (min-width: 768px) {
      justify-content: space-between;
    }
  }
`

export const Title = styled.div`
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 63px;
    color: var(--color-dark-gray);
  }

  > span {
    color: var(--color-contraste);
  }
`
