import styled from 'styled-components'

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
      transition: all 0.2s;
      z-index: 9;

      @media only screen and (min-width: 2440px) {
        padding: 0 15%;
      }

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
          height: 30px;
          transition: all 0.2s;

          @media only screen and (min-width: 768px) {
            height: 39px;
          }
        }

        h1 {
          font-weight: 400;
          margin: 0 0 0 18px;
          font-size: 22px;
          color: var(--color-dark-gray);
          padding: 0;
          border: 0;

          strong {
            font-weight: 800;
          }
        }
      }

      .navigation {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        position: fixed;
        top: 0;
        left: -100vw;
        height: 100vh;
        transition: all 0.3s;
        background-color: rgba(255, 255, 255, 0.3);

        @media screen and (min-width: 768px) {
          position: initial;
          display: flex;
          height: auto;
          width: auto;
          background: transparent;
        }
      }

      .navigationOpen {
        left: 0vw;
        transition: all 0.3s;

        > .contentMenu ul {
          > li {
            font-size: 22px;

            @media only screen and (min-width: 768px) {
              font-size: 14px;
            }
          }
        }
      }

      > .btn-menu {
        color: var(--color-roxo);
        font-size: 25px;
        cursor: pointer;

        @media only screen and (min-width: 768px) {
          display: none;
        }
      }
    }

    .scrollMenu {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      background-color: var(--color-branco);
      max-height: 40px;

      > .logo > img {
        height: 25px;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      min-height: 100vh;

      @media only screen and (min-width: 2440px) {
        padding: 0 15%;
      }

      .contentLeft {
        width: 100%;

        h2 {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 18px;
          color: var(--color-roxo);
          margin: 0;
          padding: 0;
        }

        h1 {
          font-style: normal;
          font-weight: normal;
          line-height: clamp(35px, 10vw, 72px);
          font-size: clamp(35px, 10vw, 64px);
          color: var(--color-dark-gray);
          color: var(--color-dark-gray);
          margin: 0;
          padding: 0;
          border: 0;
        }

        span {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          color: var(--color-soft-roxo);

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
          border-radius: 20px;
        }

        @media only screen and (min-width: 768px) {
          display: initial;

          max-width: 600px;
          width: 100%;
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
        bottom: 80px;
      }
      50% {
        bottom: 70px;
      }
    }
  }
`

export const ArrowContent = styled.div`
  background-color: var(--color-contraste-dark);
  color: var(--color-gray);
  border-radius: 30px;
  cursor: pointer;
  padding: 10px;
  height: 70px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: boxShadowAnimation 1s infinite;

  @keyframes boxShadowAnimation {
    0%, 100% {
      box-shadow: 0px 0px 20px 0px var(--color-gray);
    }
    50% {
      box-shadow: 0px 0px 20px 0px var(--color-soft-roxo);
    }
  }

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 40px;
  }
`
