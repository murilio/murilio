import styled from 'styled-components'

export const Container = styled.footer`
  min-height: 552px;
  padding: 74px 5% 29px;
  background-image: linear-gradient(
    var(--color-roxo),
    var(--color-roxo),
    var(--color-dark-roxo)
  );
  color: var(--color-branco);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 2440px) {
    padding: 74px 15% 29px;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }

    .footerLeft {
      > h1 {
        max-width: 400px;
        width: 100%;
        height: 109px;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 54px;

        > span {
          color: var(--color-contraste);
        }
      }

      span.linha {
        display: block;
        height: 1px;
        width: 120px;
        background-color: var(--color-contraste);
        margin: 20px 0;
      }

      > p {
        font-style: italic;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }

      div.location {
        margin-top: 61px;

        > p {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
        }
      }
    }

    .footerRight {
      display: flex;
      flex-direction: column;
      margin: 30px 0 0 0;

      @media only screen and (min-width: 768px) {
        margin: 0;
      }

      .logo {
        display: flex;

        > img {
          width: 62px;
          height: 39px;
        }

        > h1 {
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 33px;
          color: var(--color-branco);
          margin: 0 0 0 18px;

          > span {
            font-weight: 800;
          }
        }
      }

      .subMenu {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 32px 0 50px 0;

        ul > li > a {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 21px;
          color: var(--color-branco);

          &:hover {
            color: var(--color-contraste);
          }
        }

        .active {
          color: var(--color-contraste);
        }
      }
    }
  }

  .subFooter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-cinza-gelo);
    }

    > img {
      margin: 0 5px;
    }

    a {
      font-size: 16px;
      text-decoration: underline;
      color: var(--color-cinza-gelo);
      margin: 0 5px;
    }
  }
`
