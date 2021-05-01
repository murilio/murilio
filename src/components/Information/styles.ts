import styled from 'styled-components'

// icons
import { FaNode, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

export const Container = styled.section`
  padding: 0 5%;
  margin: 50px 0 88px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 120px 0 88px 0;
  }

  .details {
    width: 100%;
    margin: 0 0 30px 0;

    @media screen and (min-width: 1024px) {
      margin-top: 100px;
      width: 50%;
    }

    h2 {      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: var(--color-contraste);
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
  }

  .technologies {
    display: flex;
    flex-direction: column;
    width: 100%;

    > img {
      margin: 0 0 30px 0;
      align-self: flex-start;

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
        color: var(--color-contraste);
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
          height: 24.02px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      width: 25%;
    }
  }
`
export const IconNode = styled(FaNode)`
  color: var(--color-gray);
  width: 127px;
  height: 90px;
`
export const IconReact = styled(FaReact)`
  color: var(--color-gray);
  width: 90px;
  height: 80.08px;
`
export const IconJavaScript = styled(SiJavascript)`
  color: var(--color-gray);
  width: 69px;
  height: 69px;
`
