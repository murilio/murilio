import styled from 'styled-components'

export const Container = styled.section`
  padding: 2% 5%;

  @media only screen and (min-width: 2440px) {
    padding: 2% 15%;
  }

  .information {
    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 10px 0 20px;
  }
`
