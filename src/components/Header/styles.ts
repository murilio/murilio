import styled from 'styled-components'

// icons
import { CgMenu } from 'react-icons/cg'
import { IoIosClose } from 'react-icons/io'
import { AiOutlineArrowDown } from 'react-icons/ai'

export const Container = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;

  .backgroundColor {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-branco);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .colorWhite {
      width: 30%;
      height: 100%;
      background-color: var(--color-branco);
    }

    .colorGelo {
      width: 70%;
      height: 100%;
      background-color: var(--color-cinza-gelo);
      border-radius: 18px 0px 0px 18px;
    }
  }

  .container {
    position: absolute;
    width: 100%;
    top: 0;

    .menu {
      max-height: 70px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      background: transparent;
      width: 100%;
      padding: 0 5%;
      transition: all 0.4s;
      z-index: 9;

      .openMenu {
        display: initial;

        @media only screen and (min-width: 768px) {
          display: none;
        }
      }

      .logo {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          height: 39px;
          transition: all 0.2s;
        }

        h1 {
          font-weight: 400;
          margin-left: 18px;
          font-size: 22px;

          span {
            font-weight: 800;
          }
        }
      }

      .itens {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: -100vw;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
          45deg,
          var(--color-contraste),
          var(--color-roxo)
        );
        transition: all 0.3s;

        > ul {
          position: relative;
          display: flex;
          flex-direction: column;

          li {
            font-size: 14px;
            color: var(--color-gray);

            a {
              padding: 0 15px;
              color: var(--color-gray);

              &:hover {
                color: var(--color-contraste);
              }
            }

            .active {
              color: var(--color-contraste);
            }
          }
        }

        > div {
          position: absolute;
          bottom: 50px;
        }

        .closeMenu {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        @media only screen and (min-width: 768px) {
          position: initial;
          display: flex;
          height: auto;
          width: auto;
          background: transparent;

          ul {
            flex-direction: row;
          }

          > div {
            display: none;
          }

          .closeMenu {
            display: none;
          }
        }
      }

      .itensOpen {
        left: 0vw;
        transition: all 0.3s;

        > ul {
          > li {
            font-size: 22px;
          }
        }
      }
    }

    .menuBg {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      background-color: var(--color-branco);
      max-height: 50px;

      > .logo > img {
        height: 28px;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      min-height: 100vh;

      .contentLeft {
        width: 100%;

        h2 {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          color: var(--color-roxo);
        }

        h1 {
          font-style: normal;
          font-weight: normal;
          line-height: clamp(35px, 10vw, 72px);
          font-size: clamp(35px, 10vw, 64px);
        }

        span {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          color: var(--color-gray);

          &::after {
            content: '';
            display: block;
            height: 2px;
            width: 120px;
            margin-top: 10px;
            background: var(--color-contraste);
          }
        }

        @media only screen and (min-width: 768px) {
          max-width: 602px;
        }
      }

      .contentRight {
        display: none;
        width: auto;

        img {
          width: 100%;
        }

        @media only screen and (min-width: 768px) {
          display: initial;
        }
      }
    }
  }

  .arrow {
    position: absolute;
    bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: positionAnimation 1s infinite;

    @keyframes positionAnimation {
      0%, 100% {
        bottom: 90px;
      }
      50% {
        bottom: 100px;
      }
    }
  }

  #content {
    position: absolute;
    bottom: 0;
  }
`

export const IconMenu = styled(CgMenu)`
  color: var(--color-roxo);
  font-size: 25px;
  cursor: pointer;
`

export const IconMenuClose = styled(IoIosClose)`
  font-size: 45px;
  color: var(--color-branco);
  cursor: pointer;
`

export const Arrow = styled(AiOutlineArrowDown)`
  background-color: var(--color-contraste);
  color: var(--color-gray);
  border-radius: 30px;
  cursor: pointer;
  padding: 10px;
  height: 70px;
  width: 50px;
  animation: boxShadowAnimation 1s infinite;

  @keyframes boxShadowAnimation {
    0% {
      box-shadow: 0px 0px 20px 0px var(--color-soft-roxo);
    }
    50% {
      box-shadow: 0px 0px 20px 0px var(--color-gray);
    }
    100% {
      box-shadow: 0px 0px 20px 0px var(--color-soft-roxo);
    }
  }

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 40px;
  }
`