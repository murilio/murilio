import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 5%;
  margin: 50px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 120px 0 0 0;
  }

  @media only screen and (min-width: 2440px) {
    padding: 0 15%;
  }

  .details {
    width: 100%;
    margin: 0 0 30px 0;

    @media screen and (min-width: 1024px) {
      margin-top: 100px;
      width: 50%;
    }

    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: var(--color-contraste-dark);
      margin: 0;
      padding: 0;
    }

    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: clamp(30px, 4vw, 42px);
      line-height: 63px;
      color: var(--color-roxo);
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      border: 0;

      &:after {
        content: '';
        width: 120px;
        height: 8px;
        margin-bottom: 24px;
        background-color: var(--color-cinza-gelo);
      }
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: var(--color-soft-roxo);
      max-width: 470px;

      + p {
        margin-top: 24px;
      }
    }

    > a {
      display: inline-block;
      margin: 50px 0 0 0;
      background-color: var(--color-contraste-dark);
      border-radius: 20px;
      color: var(--color-branco);
      padding: 19px 65px;
      transition: all 0.3s;

      &:hover {
        background-color: var(--color-dark-roxo);
      }
    }
  }

  .technologies {
    display: flex;
    flex-direction: column;
    width: 100%;

    > img {
      margin: 0 0 30px 0;
      align-self: flex-start;

      width: 267px;
      height: 198px;

      @media only screen and (min-width: 1024px) {
        margin: -70px 0 100px -40px;
      }
    }

    .cardsTechnologies {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-end;
      max-width: 260px;
      width: 100%;

      > p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 18px;
        color: var(--color-contraste-dark);
      }

      .cardTechs {
        height: 350px;
        width: 100%;
        background-color: var(--color-cinza-gelo);
        border-radius: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .heart {
          position: absolute;
          top: -11px;
          right: 20px;
          width: 28px;
          height: 24px;
        }

        .icon {
          width: 90px;
          height: 90px;
        }

        .icon-node {
          width: 140px;
          height: 90px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      width: 25%;
    }
  }
`
